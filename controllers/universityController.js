//GET '/universities'
const myService = require('../services/universityService')   ; 

const getUniversities = async  (req, res) =>{
    try {
        const {universities} = await myService.getAllUniversities();
        res.status(200).json(universities);
    } catch (e) {
         //res.status(400).json(universities);
         res.json("error");
    }
}
module.exports = getUniversities;

