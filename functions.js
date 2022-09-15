"use strict";
const axios = require('axios');
const cheerio = require('cheerio');
const { get } = axios;

function getJson(sources, searchString, articles){
    try{
        sources.forEach(source => {
            get(source.address)
                .then(response => {
                    const html = response.data
                    const $ = cheerio.load(html)
                    
                    $(searchString, html).each(function (){
                        const text = $(this).text().trim();
                        const url = $(this).attr('href');
                        
                        articles.push({
                            text,
                            url: source.base + url,
                            source: source.name,
                            publication: source.address
                        })
                    })
                })
        })
        
        return articles;
    } catch(err){
        console.log("Something went wrong: " + err)
        throw new Error(err);
    }
    
}

module.exports = getJson