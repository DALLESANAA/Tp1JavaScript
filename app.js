const express = require('express');
const app = express();
const port = 5000;
app.set("view engine", "ejs");

const universityRoute = require('./routes/universityRoute');
app.use('/',universityRoute);


app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

