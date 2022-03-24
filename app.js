var express = require("express");
const axios = require("axios");
const cors = require("cors");
const port = 5000;
const LINK_UNIVERSITIES = 'http://universities.hipolabs.com/search?country=morocco';
const app = express();
app.use(cors({origin : "*"}))

app.get('/', async (req, res) => { 
    try {
        const { data } =  await axios.get(LINK_UNIVERSITIES);
        res.json(data);
        } catch(ex) {
            res.status(500).send(ex.data);
        }  
      });

app.listen(port, () => { 
    console.log(`Now listening on port ${port}`); 
});
    
/*const express = require('express');
const app = express();
const port = 5000;
const URL = "http://universities.hipolabs.com/search?country=morocco";
const axios = require('axios');
const res = require('express/lib/response');
app.use(cors({origin : "*"}))


axios.get(URL).then(resp => {
    console.log(resp.data);
});


app.get("/universities", () => {
    axios.get(URL)
    .then(resp => {
        res.json(resp.data)
      .catch(err => res.send(err));
  });
})


app.get('/list', function (req, res) {
    fs.readFile('Demo.txt', 'utf8', function(err, data){ 
    res.json(data);
});
})
  
app.listen(port, () => { 
    console.log(`Now listening on port ${port}`); 
});

/*const express = require('express');
const app = express();
const port = 5000;
const URL = "http://universities.hipolabs.com/search?country=morocco";
const axios = require('axios');

app.get("/universities",universityController.getUniversities);

app.listen(port, () => { 
    console.log(`Now listening on port ${port}`); 
});*/


