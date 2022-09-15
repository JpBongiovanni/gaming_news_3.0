"use strict";
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const { get } = axios;
const router = express.Router();


const sources = require('../sources');

const donkeyKongArticles = [];

//Donkey Kong articles
sources.forEach(source => {
    get(source.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            
            $('a:contains("Donkey")', html).each(function (){
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

router
    .get("/", (req, res) => {
        try{
            res.json(donkeyKongArticles)
        } catch (err) {
            res.json('Something went wrong: ' + err)
        }
        
    })

module.exports = router