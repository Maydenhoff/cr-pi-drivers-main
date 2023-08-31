const axios = require("axios");
const { Team } = require("../db");

const getTeams = async () => {
  const peticion = (await axios.get("http://localhost:5000/drivers")).data;
  console.log("estoy ava");
  console.log(peticion[0].teams.split(", "));
  console.log(typeof peticion[0].teams);
  console.log(Team);

  for (let i = 0; i < peticion.length; i++) {
    if (peticion[i].teams) {
      let team = peticion[i].teams?.split(",");
      for (let j = 0; j < team.length; j++) {
        let currentTeam = team[j] 
        if(currentTeam[0] === " ")  {
            currentTeam = currentTeam.slice(1)
        }
        console.log(currentTeam);
        await Team.findOrCreate({where: {name: currentTeam}});
        // console.log(team[j]);
      }
    }
  }
};
module.exports = {
  getTeams,
};
