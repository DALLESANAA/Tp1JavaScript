const axios = require('axios')

exports.getAllUniversitiesSer = async function (){
    try {
        const universities = await axios.get('http://universities.hipolabs.com/search?country=morocco')
        return universities;
    } catch (e) {
        console.log("****error on service****")
        throw Error('Error while Getting universities')
    }
}
