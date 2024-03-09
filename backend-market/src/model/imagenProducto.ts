import { DataTypes, Model } from 'sequelize';
import sequelize from '../bd/connetion';

export const ImagenProducto = sequelize.define(
  'ImagenProducto',
  {
    ProductoId: {
      type: DataTypes.INTEGER,
    },
    UrlImagen: {
      type: DataTypes.STRING,
    },
  },

  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

export default ImagenProducto;