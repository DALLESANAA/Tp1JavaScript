const axios = require('axios')

exports.getAllUniversitiesFromAPI = async function (){
    try {
        const universities = await axios.get('http://universities.hipolabs.com/search?country=morocco')
        return universities;
    } catch (e) {
      throw Error('Echec de récupération des universités')
    }
}
