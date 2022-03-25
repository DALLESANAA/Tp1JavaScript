const express = require('express')
const getAllUniversities =require('../controllers/universityController')
const app = express.Router()
app.get('/universities',getAllUniversities);

module.exports = app


