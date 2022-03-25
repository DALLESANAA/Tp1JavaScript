var express = require('express');
var app = express();
const port = 5000;

const universityRoute = require('./routes/universityRoute');
app.use('/',universityRoute);


app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

