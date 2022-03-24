var express = require("express");
const axios = require("axios");
const cors = require("cors");
const port = 5000;
const UNIVERSITIES_API = 'http://universities.hipolabs.com/search?country=morocco';
const app = express();

app.set("view engine", "ejs");

app.get('/universities', async (req, res) => { 
    try {
        const { data } =  await axios.get(UNIVERSITIES_API);
        res.render("index", {
            universities: data,
            });
        } catch(ex) {
            res.status(500).send(ex.data);
        }  
      });

app.listen(port, () => { 
    console.log(`Listening on port ${port}`); 
});
    