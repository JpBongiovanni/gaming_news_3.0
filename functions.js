"use strict";
const axios = require('axios');
const cheerio = require('cheerio');
const { get } = axios;

function getJson(sources, searchString, articles){
    
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
                .catch(err => {
                    if(err.response){
                        //server responded with a status other than 200
                        console.log(err.response.data);
                        console.log(err.response.status);
                        console.log(err.response.headers);

                        if(err.response.status === 404){
                            alert("Error: Page Not Found");
                        }
                    } else if (err.request){
                        // Request was made but no response
                        console.error(err.request);
                    } else {
                        console.error(err.message);
                    }

                    
                })
        })
        
        return articles;
    
    
}

module.exports = getJson