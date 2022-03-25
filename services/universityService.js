const axios = require('axios')

exports.getAllUniversitiesFromAPI = async function (){
    try {
        const universities = await axios.get('testerror')
        return universities;
    } catch (e) {
      throw Error('Echec de récupération des universités')
    }
}
//http://universities.hipolabs.com/search?country=morocco