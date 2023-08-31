const axios = require("axios");
const { Driver } = require("../db");

const getDriverByName = async (req, res) => {
    let { name } = req.query;
    name = name.toLowerCase();
    name = name[0].toUpperCase() + name.slice(1, name.length);
    try {
      console.log(name);
      const drivers = await axios.get(
        `http://localhost:5000/drivers?name.forename=${name}`
      )
      
      if(drivers.data.length > 16) { //cambio a 2 por ej
          let firstDrivers = drivers.data.slice(0, 15);
          return res.status(200).json(firstDrivers)
      } else {
          console.log(drivers.data.length);
          const restantes = 15- drivers.data.length
          console.log(restantes);
  
          const driverDataBase = await Driver.findAll({where: {name: name}, limit: restantes})
  
          console.log(driverDataBase);
          
          // const total = drivers.data + driverDataBase 
  
          return res.status(200).json([...drivers.data,...driverDataBase])
      }
  
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  

  module.exports = {
    getDriverByName
  }