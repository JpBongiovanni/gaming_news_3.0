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
const metroid = require("./routes/metroid");
const donkeyKong = require("./routes/donkeyKong");


app.get('/', async (req, res) => {
    try {
        res.json('Welcome to my Gaming News API, go to /routes/allResults to see the all news articles')
    } catch (err) {
        res.json('Something went wrong:' + err)
        throw new Error(err);
    }
})

// routes URL

app.use("/allResults", allResults);
app.use("/mario", mario);
app.use("/zelda", zelda);
app.use("/metroid", metroid);
app.use("/donkeyKong", donkeyKong);


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))