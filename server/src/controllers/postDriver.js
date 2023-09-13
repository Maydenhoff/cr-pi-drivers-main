const axios = require("axios");
const { Driver, Team } = require("../db");


const postDriver = async(req, res) => {
    try {
        const { name, surname, description, image, nationality, dob, team } = req.body;
        if( !name || !surname || !description || !image || !nationality|| !dob || !team || !team.length) {
            return res.status(400).send("faltan datos")
        } 
        let driver = await Driver.create({name:`${name} ${surname}`, description, image, nationality, dob})

      
        team.map( async(e) => {
          foundTeam = await Team.findAll({where: {name:e}})
          await driver.addTeam(foundTeam)
        })
        
          
            return res.status(200).json({...driver.dataValues, team: team})

      
    } catch (error) {
      return  res.status(500).json(error.message)
    }
   
  };
  
  module.exports = {
  
    postDriver,
  
  };