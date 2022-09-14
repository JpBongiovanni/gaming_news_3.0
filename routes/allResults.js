"use strict";
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const { get } = axios;
const router = express.Router();
const sources = require('../sources');


const allArticles = [];

//all articles
sources.forEach(source => {
    get(source.address)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)

        $('a:contains("Zelda"), a:contains("Ocarina of Time"), a:contains("Mario"), a:contains("Super Mario"), a:contains("Metroid"), a:contains("Samus"), a:contains("Star Wars"), a:contains("Final Fantasy"), a:contains("Assassins Creed"), a:contains("Tetris"), a:contains("The Sims"), a:contains("Grand Theft Auto"), a:contains("GTA"), a:contains("Call of Duty"), a:contains("Sonic"), a:contains("Sonic the Hedgehog"), a:contains("Mega Man"), a:contains("Hollow Knight"), a:contains("Resident Evil"), a:contains("Silent Hill"), a:contains("League of Legends"), a:contains("Pokemon"), a:contains("Donkey Kong")', html).each(function (){
            const text = $(this).text().trim();
            const url = $(this).attr('href');

            allArticles.push({
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
        res.json(allArticles)
    })

module.exports = router;