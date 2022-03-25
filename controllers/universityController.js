var express = require("express");
const app = express();
const axios = require("axios");
const port = 5000;
const universityService= require('./services/universityService')    

const UNIVERSITIES_API_LINK = 'http://universities.hipolabs.com/search?country=morocco';
app.set("view engine", "ejs");

exports.getAllUniversities(link) = async (req, res) => {
    try {
        const { data } =  await universityService.getAllUniversities(link);
        res.render("index", {
            universities: data,
            });
        } catch(ex) {
            res.status(500).send(ex.data);
        }  
}
