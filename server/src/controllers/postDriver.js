const axios = require("axios");
const { Driver } = require("../db");


const postDriver = async(req, res) => {
    try {
        const { name, surname, description, image, nationality, dob } = req.body;
        if( !name || !surname || !description || !image || !nationality|| !dob) {
            return res.status(400).send("faltan datos")
        } else {
            const driver = await Driver.findOrCreate({where: {name, surname, description, image, nationality, dob }})
            //description, image, nationality, dob }
            return res.status(200).send("Driver creado con exito")
            console.log(driver);
            // return res.status(200).json(driver)
          }
  
          // FALTA TEAMS
      
    } catch (error) {
      return  res.status(500).json(error.message)
    }
   
  };
  
  module.exports = {
  
    postDriver,
  
  };