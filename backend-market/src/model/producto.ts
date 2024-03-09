import { DataTypes, Model } from 'sequelize';
import sequelize from '../bd/connetion';
import { ImagenProducto } from './imagenProducto';

export const Producto = sequelize.define(
  'Producto',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING,
    },
    Descripcion: {
      type: DataTypes.STRING,
    },
    Marca: {
      type: DataTypes.STRING,
    },
    PrecioVenta: {
      type: DataTypes.DOUBLE,
    },
    PrecioRegular: {
      type: DataTypes.DOUBLE,
    },
    Slug: {
      type: DataTypes.STRING,
    },
    FechaLanzamiento: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

Producto.hasMany(ImagenProducto, { foreignKey: 'ProductoId', sourceKey: 'id' });

ImagenProducto.belongsTo(Producto, {
  foreignKey: 'ProductoId',
  targetKey: 'id',
});

export default Producto;
