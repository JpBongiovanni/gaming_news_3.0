const PORT = process.env.PORT || 8000;
const express = require('express');
const axios = require('axios');
const cheerio = ('cheerio');

const { get } = axios;
const app = express();

//route constants
const allResults = require("./routes/allResults");
const mario = require("./routes/mario");
const zelda = require("./routes/zelda");

app.get('/', (req, res) => {
    res.json('Welcome to my Gaming News API, go to /routes/allResults to see the all news articles')
});

//routes URL
app.use("/allResults", allResults);
app.use("/mario", mario);
app.use("/zelda", zelda);

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))