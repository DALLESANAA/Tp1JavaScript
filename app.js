const express = require('express'); 
const app = express();
const myRoute = require('./routes/route'); 
app.set("view engine", "ejs");

app.listen(8888, () => { 
    console.log(`Now listening on port 8888`); 
});

app.use('/', myRoute); 
