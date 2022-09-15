"use strict";
const express = require('express');
const router = express.Router();


const sources = require('../sources');
const getJson = require('../functions');

const donkeyKongArticles = [];

getJson(sources, 'a:contains("Donkey Kong")', donkeyKongArticles);

router
    .get("/", (req, res) => {
        try{
            res.json(donkeyKongArticles)
        } catch (err) {
            res.json('Something went wrong: ' + err)
        }
        
    })

module.exports = router