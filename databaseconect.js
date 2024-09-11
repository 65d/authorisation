
// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize(config.database, config.username, config.password, {
//     host: config.host,
//     dialect: config.dialect,
//     port: config.port,
//   });


// var initModels = require("./models/init-models");


// var models = initModels(sequelize);


require('dotenv').config(); // Load environment variables from .env
const { Sequelize } = require('sequelize');

// Load the configuration from environment variables
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT || 3306,
});

// Initialize models
var initModels = require("./models/init-models");
var models = initModels(sequelize);

// Export the initialized Sequelize instance and the models
module.exports = {
    sequelize,  // For database connection and syncing
    models      // For accessing the initialized models
};

