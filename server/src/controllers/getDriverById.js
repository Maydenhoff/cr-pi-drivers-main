const axios = require("axios");
const { Driver } = require("../db");


const getDriverById = async (req, res) => {
    const { idDriver } = req.params;
    try {
      // const driver = await axios
      const driverDataBase = await Driver.findOne({ where: { id: idDriver } })
        .then((response) => response.dataValues)
        .catch((e) => {}); // retorna un objeto vacio
  
      if (driverDataBase?.name) return res.status(200).json(driverDataBase);
  
      const { name, surname, description, image, nationality, dob } = await axios
        .get(`http://localhost:5000/drivers/${idDriver}`)
        .then((response) => response.data)
        .catch((e) => {
          return {};
        }); // retorna un objeto vacio
      console.log("estoy aca");
      console.log(name);
      if (name)
        return res
          .status(200)
          .json({
            id: idDriver,
            name,
            surname,
            description,
            image,
            nationality,
            dob,
          });
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  module.exports = {
    getDriverById
  }