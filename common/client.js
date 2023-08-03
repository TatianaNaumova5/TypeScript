const axios = require('axios')

const client = axios.create({
    validateStatus:()=> true
})
module.exports=client