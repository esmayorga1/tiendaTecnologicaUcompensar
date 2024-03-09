"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connetion_1 = __importDefault(require("../bd/connetion"));
const Product = connetion_1.default.define('Producto', {
    Nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    Descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    Marca: {
        type: sequelize_1.DataTypes.STRING
    },
    PrecioVenta: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    PrecioRegular: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    Slug: {
        type: sequelize_1.DataTypes.NUMBER
    },
    FechaLanzamiento: {
        type: sequelize_1.DataTypes.DATE
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Product;
