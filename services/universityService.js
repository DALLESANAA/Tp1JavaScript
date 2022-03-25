const LINK_UNIVERSITIES = 'http://universities.hipolabs.com/search?country=morocco';
const axios = require("axios");

 const getAllUniversities = async function() { 
    try {
        const data = await axios.get(LINK_UNIVERSITIES);
        return data;
        } catch(ex) {
            throw Error('Error getting data');
        }  
};

module.exports = getAllUniversities;
