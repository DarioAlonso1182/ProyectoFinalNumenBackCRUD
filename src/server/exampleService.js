const {default: axios} = require('axios');

const getExampleService = async (req) =>{
    const { dolars } = req.params;
    const { response } = await axios.get('https://criptoya.com/api/dolar');
    console.log(response);
    if(!response.data) return {message: "Dollar not found.!"};
    const { blue } = response.data;
    return {price: dolars * blue};
}

module.exports = getExampleService;