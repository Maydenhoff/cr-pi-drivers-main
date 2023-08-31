const axios = require("axios");

const getDrivers = async (req, res) => {
    try {
      const {data} = await axios.get("http://localhost:5000/drivers")
    for(let i = 0; i<data.length; i++) {
      if(!data[i].image.url.length) {
        data[i].image.url= "https://static.wikia.nocookie.net/disney/images/4/44/Rayo_McQueen.png/revision/latest/scale-to-width-down/350?cb=20140204155911&path-prefix=es"
        data[i].image.imageby = "By Cars"
        console.log(data[i].image);
      }
    }
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).send(error.message);
    
  }
}

module.exports = {
    getDrivers
}