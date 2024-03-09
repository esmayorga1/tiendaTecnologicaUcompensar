"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// En el modelo ImagenProducto (imagenProducto.ts)
const sequelize_1 = require("sequelize");
const connetion_1 = __importDefault(require("../bd/connetion"));
class ImagenProducto extends sequelize_1.Model {
}
ImagenProducto.init({
    // Definición de las columnas del modelo ImagenProducto
    ProductoId: {
        type: sequelize_1.DataTypes.INTEGER // Suponiendo que es una clave foránea
    },
    UrlImagen: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    sequelize: connetion_1.default,
    modelName: 'imagenesProductos',
    timestamps: false
});
// Establece la relación: una ImagenProducto pertenece a un solo Producto (muchos a uno)
//ImagenProducto.belongsTo(Product, { foreignKey: 'id' });
exports.default = ImagenProducto;
