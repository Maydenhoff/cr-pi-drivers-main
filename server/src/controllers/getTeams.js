const axios = require("axios");
const { Team } = require("../db");

const getTeams = async (req, res) => {
  try {
    const {data} = (await axios.get("http://localhost:5000/drivers"));
    console.log(data);
    let teamsArray = []
    for (let i = 0; i < data.length; i++) {
      if(data[i].teams) {
        let team = data[i].teams?.split(",")
        for (let j= 0; j<team.length; j++) {
          let currentTeam = team[j].trim()
          console.log(currentTeam);
              await Team.findOrCreate({where: {name: currentTeam}});
              if(!teamsArray.includes(currentTeam)) {
                teamsArray.push(currentTeam)
        }
      }
    }
        // console.log(team);

      // if (peticion[i].teams) {
      //   console.log(peticion[i].teams);
      //   let team = peticion[i].teams?.trim()
      //   team = peticion[i].teams?.split(",");
      //   console.log(team);
      //   for (let j = 0; j < team.length; j++) {
      //     let currentTeam = team[j] 
      //     if(currentTeam[0] === " ")  {
      //       currentTeam = currentTeam.slice(1)
      //     }

      //     await Team.findOrCreate({where: {name: currentTeam}});
      //     if(!teamsArray.includes(currentTeam)) {
      //       teamsArray.push(currentTeam)

      //     }
      //   }
      // }
    }
      return res.status(200).json(teamsArray)
  } catch (error) {
    return res.status(500).send(error.message);
  }
    

};
module.exports = {
  getTeams,
};
