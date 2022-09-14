"use strict";
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const { get } = axios;
const router = express.Router();


const sources = [
    {
        name: "NintendoLife",
        address: 'https://www.nintendolife.com/',
        base: 'https://nintendolife.com/'
    },
    {
        name: "NintendoNews",
        address: 'https://nintendonews.com/',
        base: 'https://nintendonews.com/'
    },
    {
        name: "MyNintendoNews",
        address: "https://mynintendonews.com/",
        base: ''
    },
    {
        name: "Kotaku",
        address: "https://kotaku.com/",
        base: ''
    },
    {
        name: "Comicbook",
        address: "https://comicbook.com/",
        base: ''
    },
    {
        name: "GameRant",
        address: "https://gamerant.com/",
        base: 'https://gamerant.com/'
    },
    {
        name: "NintendoEverything",
        address: "https://nintendoeverything.com/",
        base: ''
    },
    {
        name: "Polygon",
        address: "https://www.polygon.com/",
        base: 'https://www.polygon.com'
    },
    {
        name: "Gamespot",
        address: "https://www.gamespot.com/",
        base: 'https://www.gamespot.com'
    },
    {
        name: "GeeksAndGamers",
        address: "https://www.geeksandgamers.com/",
        base: ''
    },
    {
        name: "ign",
        address: "https://www.ign.com/",
        base: 'https://www.ign.com'
    },
    {
        name: "gamesradar",
        address: "https://www.gamesradar.com/",
        base: ''
    },
    {
        name: "PCGamer",
        address: "https://www.pcgamer.com/",
        base: ''
    },
    {
        name: "neoseeker",
        address: "https://www.neoseeker.com/",
        base: ''
    },
    {
        name: "giantbomb",
        address: "https://www.giantbomb.com/",
        base: ''
    },
]

const metroidArticles = [];

//metroid articles
sources.forEach(source => {
    get(source.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            
            $('a:contains("Metroid"), a:contains("Samus")', html).each(function (){
                const text = $(this).text().trim();
                const url = $(this).attr('href');
                
                metroidArticles.push({
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
        res.json(metroidArticles)
    })

module.exports = router