module.exports = (sequelize) => {
  sequelize.define(
    "team",
    {
      id: {},
      nombre: {},
    },
    { timestamps: false }
  );
};
