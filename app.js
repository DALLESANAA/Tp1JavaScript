var express = require("express");
const app = express();
const axios = require("axios");
const port = 5000;
const universityService= require('./services/universityService')    

const UNIVERSITIES_API_LINK = 'http://universities.hipolabs.com/search?country=morocco';
app.set("view engine", "ejs");

app.get('/universities', async (req, res) => {
    try {
        const { data } =  await universityService.getAllUniversities(UNIVERSITIES_API_LINK);
        res.render("index", {
            universities: data,
            });
        } catch(ex) {
            res.status(500).send(ex.data);
        }  
      }
);


app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});