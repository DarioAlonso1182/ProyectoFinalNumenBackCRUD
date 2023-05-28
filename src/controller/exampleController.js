const getExampleService = require("../server/exampleService");

const getPriceExample = async (req, res) =>{
    const price = await getExampleService(req);
    res.json(price);
}

module.exports = getPriceExample;