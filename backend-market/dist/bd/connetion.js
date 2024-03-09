"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('tienda_tecnologica_ucompensar', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});
exports.default = sequelize;
