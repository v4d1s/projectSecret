const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(null, null, 'U2FsdGVkX1+K1hMbQeQfy1LYVvPnEU3IftRZv0MvRw0=', {
    dialect: 'sqlite',
    dialectModulePath: '@journeyapps/sqlcipher',
    // storage: './sqlite.db',
    host: './dev.sqlite',
})

module.exports = sequelize
