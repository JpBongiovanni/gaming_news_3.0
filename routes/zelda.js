"use strict";
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const { get } = axios;
const router = express.Router();


const sources = require('../sources');

const zeldaArticles = [];

//zelda articles
sources.forEach(source => {
    get(source.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            
            $('a:contains("Zelda"), a:contains("Ocarina of Time")', html).each(function (){
                const text = $(this).text().trim();
                const url = $(this).attr('href');

                zeldaArticles.push({
                    text,
                    url: source.base + url,
                    source: source.name,
                    publication: source.address
                })
            })
        })
})

router  
    .get("/", (req, res) => {res.json
        (zeldaArticles)})

module.exports = router