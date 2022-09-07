const PORT = process.env.PORT || 8000;
const express = require('express');
const axios = require('axios');
const cheerio = ('cheerio');

const { get } = axios;
const app = express();
const allResults = require("./routes/allResults");

app.get('/', (req, res) => {
    res.json('Welcome to my Gaming News API, go to /all to see the all news articles')
});

app.use("/all", allResults);

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))