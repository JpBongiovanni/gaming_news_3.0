const PORT = process.env.PORT || 8000;
const express = require('express');
const axios = require('axios');
const cheerio = ('cheerio');

const { get } = axios;
const app = express();
const allResults = require("./routes/allResults");
const mario = require("./routes/mario");

app.get('/', (req, res) => {
    res.json('Welcome to my Gaming News API, go to /routes/allResults to see the all news articles')
});

app.use("/allResults", allResults);

app.use("/mario", mario);

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))