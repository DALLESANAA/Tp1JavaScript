const axios = require('axios')

exports.getAllUniversities = async function (link) {
    try {
        var uns = await axios.get(link)
        return uns;
    } catch (e) {
        throw Error('Error while Getting universities')
    }
}
