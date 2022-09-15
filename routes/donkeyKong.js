"use strict";
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const { get } = axios;
const router = express.Router();


const sources = require('../sources');

const donkeyKongArticles = [];

//Donkey Kong articles
try{
    sources.forEach(source => {
        get(source.address)
            .then(response => {
                const html = response.data
                const $ = cheerio.load(html)
                
                $('a:contains("Donkey Kong")', html).each(function (){
                    const text = $(this).text().trim();
                    const url = $(this).attr('href');
                    
                    donkeyKongArticles.push({
                        text,
                        url: source.base + url,
                        source: source.name,
                        publication: source.address
                    })
                })
            })
    })
} catch (err){
    res.json("Something went wrong: " + err);
    throw new Error(err);
    console.log(err)
}


router
    .get("/", (req, res) => {
        try{
            res.json(donkeyKongArticles)
        } catch (err) {
            res.json('Something went wrong: ' + err)
            throw new Error(err)
        }
        
    })

module.exports = router