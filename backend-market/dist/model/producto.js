"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const sequelize_1 = require("sequelize");
const connetion_1 = __importDefault(require("../bd/connetion"));
const imagenProducto_1 = require("./imagenProducto");
exports.Producto = connetion_1.default.define('Producto', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    Descripcion: {
        type: sequelize_1.DataTypes.STRING,
    },
    Marca: {
        type: sequelize_1.DataTypes.STRING,
    },
    PrecioVenta: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    PrecioRegular: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    categoria: {
        type: sequelize_1.DataTypes.STRING,
    },
    FechaLanzamiento: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});
exports.Producto.hasMany(imagenProducto_1.ImagenProducto, { foreignKey: 'ProductoId', sourceKey: 'id' });
imagenProducto_1.ImagenProducto.belongsTo(exports.Producto, {
    foreignKey: 'ProductoId',
    targetKey: 'id',
});
exports.default = exports.Producto;
