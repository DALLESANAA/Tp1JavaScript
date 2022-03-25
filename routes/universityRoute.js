const express = require('express') 
const getAllUniversities =require('../controllers/universityController')

let app = express.Router()


app.get('/un',getAllUniversities);


module.exports = app


