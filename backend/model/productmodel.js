const Sequelize = require("sequelize")
const sequelize = require('../db/server');
const J_product = sequelize.define("J_product", {
   Product_name: {
      type: Sequelize.STRING,

   },
   Product_price: {
      type: Sequelize.INTEGER,
   },
   Product_category: {
      type: Sequelize.STRING
   },
   userId: {
      type: Sequelize.INTEGER,
      allowNull: false
   }

});
module.exports = J_product;
