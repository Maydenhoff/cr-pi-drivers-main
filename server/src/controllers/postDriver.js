const axios = require("axios");
const { Driver, Team } = require("../db");


const postDriver = async(req, res) => {
    try {
        const { name, surname, description, image, nationality, dob, team } = req.body;
        if( !name || !surname || !description || !image || !nationality|| !dob || !team || !team.length) {
            return res.status(400).send("faltan datos")
        } 
        
        let driver = await Driver.create({name:`${name} ${surname}`, description, image, nationality, dob })
            //description, image, nationality, dob }
        team.map( async(e) => {
          let foundTeam = await Team.findOne({where: {name:e}})
          console.log(foundTeam);
          await driver.addTeam(foundTeam)
        })

        console.log("esyo" , driver);
            return res.status(200).json(driver)

          
            // return res.status(200).json(driver)
          

          
          // FALTA TEAMS
      
    } catch (error) {
      return  res.status(500).json(error.message)
    }
   
  };
  
  module.exports = {
  
    postDriver,
  
  };