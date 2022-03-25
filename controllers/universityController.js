const universityService= require('../services/universityService')   
const getAllUniversities = async (req, res) => {
    try {
        const { data } =  await universityService.getAllUniversitiesSer();
        res.json(data);
        /*res.render("index", {
            universities: data,
        });*/
        } catch(ex) {
            console.log("****error on controller*******")
            res.status(500).send(ex.data);
        }  
}
module.exports=getAllUniversities;
