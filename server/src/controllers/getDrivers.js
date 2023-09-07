const axios = require("axios");
const { Driver } = require("../db");
const { parseTeams } = require("../utils/parseTeams.js")

const getDrivers = async (req, res) => {
  try {
    let drivers = [];
    const { data } = await axios.get("http://localhost:5000/drivers");
    for (let i = 0; i < data.length; i++) {
      const driver = {
        id: data[i].id,
        name: data[i].name,
        image: data[i].image,
        dob: data[i].dob,
        nationality: data[i].nationality,
        teams: data[i].teams ? parseTeams(data[i].teams) : [],
        description: data[i].description,
      };

      if (!driver.image.url.length) {
        driver.image.url =
          "https://cdn-images.motor.es/image/m/694w.webp/fotos-noticias/2020/03/que-coche-es-rayo-mcqueen-202066150-1585635516_1.jpg";
        driver.image.imageby = "By Cars cambiadoo";
      }
      drivers.push(driver);
    }
    const driverDataBase = await Driver.findAll();

    return res.status(200).json([...drivers, ...driverDataBase]);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//  'https://picsum.photos/700/400?random%27}; imagen ramdon

module.exports = {
  getDrivers,
};
