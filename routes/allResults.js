"use strict";
const express = require('express');
const router = express.Router();

//imports
const sources = require('../sources');
const getJson = require('../functions');


const allArticles = [];

getJson(sources, 'a:contains("Zelda"), a:contains("Ocarina of Time"), a:contains("Mario"), a:contains("Super Mario"), a:contains("Metroid"), a:contains("Samus"), a:contains("Star Wars"), a:contains("Final Fantasy"), a:contains("Assassins Creed"), a:contains("Tetris"), a:contains("The Sims"), a:contains("Grand Theft Auto"), a:contains("GTA"), a:contains("Call of Duty"), a:contains("Sonic"), a:contains("Sonic the Hedgehog"), a:contains("Mega Man"), a:contains("Hollow Knight"), a:contains("Resident Evil"), a:contains("Silent Hill"), a:contains("League of Legends"), a:contains("Pokemon"), a:contains("Donkey Kong")', allArticles);

router
    .get("/", (req, res) => {
        try{
            res.json(allArticles)
        } catch (err) {
            res.json('Something went wrong: ' + err)
            
        }
        
    })

module.exports = router;