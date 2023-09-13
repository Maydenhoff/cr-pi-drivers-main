const axios = require("axios");
const { Driver } = require("../db");


const deleteDriver = async(req, res) => {
    console.log("aca estoy");

    const { idDriver } = req.params
    console.log(idDriver);
    try {
     Driver.destroy({
        where:{id: idDriver}
      })
      const { data } = await axios.get(`http://localhost:3001/drivers`);
      return res.status(200).json(data)
    } catch (error) {
        return res.status(400).send(error.message)
    }
    // await User.destroy({
    //     where: {
    //       firstName: "Jane"
    //     },
    //   });
}

module.exports = {
    deleteDriver,
  };
  