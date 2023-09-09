const axios = require("axios");
const { Driver, Team } = require("../db");


const postDriver = async(req, res) => {
    try {
        const { name, surname, description, image, nationality, dob, teams } = req.body;
        if( !name || !surname || !description || !image || !nationality|| !dob || !teams || !teams.length) {
            return res.status(400).send("faltan datos")
        }  
            
        
        let driver = await Driver.create({name:`${name} ${surname}`, description, image, nationality, dob })
            //description, image, nationality, dob }
        teams.map( async(e) => {
          let foundTeam = await Team.findOne({where: {name:e}})
          console.log(foundTeam, e, driver);
          await driver.addTeam(foundTeam)
        })

            return res.status(200).json(driver)

          
            console.log(driver);
            // return res.status(200).json(driver)
          

          
          // FALTA TEAMS
      
    } catch (error) {
      return  res.status(500).json(error.message)
    }
   
  };
  
  module.exports = {
  
    postDriver,
  
  };