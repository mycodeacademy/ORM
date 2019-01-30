module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    birthday: DataTypes.DATE,
  }, {});
  // User.associate = function(models) {
  //   // associations can be defined here
  // };
  User.generate = (name, DOB) => User.create({name, birthday: DOB });
  User.getAllUsers = () => User.findAll();
  return User;
};