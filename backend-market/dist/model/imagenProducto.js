"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagenProducto = void 0;
const sequelize_1 = require("sequelize");
const connetion_1 = __importDefault(require("../bd/connetion"));
exports.ImagenProducto = connetion_1.default.define('ImagenProducto', {
    ProductoId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    UrlImagen: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});
exports.default = exports.ImagenProducto;
