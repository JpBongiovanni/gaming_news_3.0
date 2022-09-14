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
// const donkeyKong = require("./routes/donkeyKong");
// const starWars = require("./routes/starWars");

app.get('/', async (req, res) => {
    try {
        res.json('Welcome to my Gaming News API, go to /routes/allResults to see the all news articles')
    } catch (err) {
        res.json('Something went wrong:' + err)
    }
})

// routes URL

app.use("/allResults", allResults);
app.use("/mario", mario);
app.use("/zelda", zelda);
app.use("/metroid", metroid);
// app.use("/donkeyKong", donkeyKong);
// app.use("/starWars", starWars);

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))