const axios = require("axios")
const API = "https://pro-api.coinmarketcap.com/"
const MAP = "v1/cryptocurrency/map" // Use it to find more ID's
const LIST = "v1/cryptocurrency/listings/latest"
const config = {
    headers: {
        "X-CMC_PRO_API_KEY": "7e6ee6c1-5f6a-4b17-a0e4-9c42241cd7a4",
    },
    params:{
        // symbol: "eth",
        // id:1027
    }
}

function getCurrency (req, res){    
    axios.get(API + LIST, config)
    .then(function (response){
        
        res.send(response.data)
    })
    .catch(e => console.log(e))
    
    
}

module.exports = getCurrency