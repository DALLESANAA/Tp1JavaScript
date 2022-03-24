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
