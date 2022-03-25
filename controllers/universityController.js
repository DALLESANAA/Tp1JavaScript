const universityService= require('../services/universityService')   
const getAllUniversities = async (req, res) => {
    try {
        const { data } =  await universityService.getAllUniversitiesFromAPI();
       // res.json(data);
        res.render("index", {
            universities: data,
         })
        } catch(ex) {
            res.status(500).send(ex.data);
        }  
}
module.exports=getAllUniversities;
