const axios = require("axios");
const { Driver } = require("../db");

const getDrivers = async (req, res) => {
    try {
      
      const {data} = await axios.get("http://localhost:5000/drivers")
    for(let i = 0; i<data.length; i++) {
      if(!data[i].image.url.length) {
        data[i].image.url= "https://cdn-images.motor.es/image/m/694w.webp/fotos-noticias/2020/03/que-coche-es-rayo-mcqueen-202066150-1585635516_1.jpg"
        data[i].image.imageby = "By Cars cambiadoo"
        console.log(data[i].image);

      }
    }

    const driverDataBase = await Driver.findAll()
    
    return res.status(200).json([...data, ...driverDataBase])
  } catch (error) {
    return res.status(500).send(error.message);
    
  }
}

module.exports = {
    getDrivers
}