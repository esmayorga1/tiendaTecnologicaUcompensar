// types.ts

import { Model, Optional } from 'sequelize';

// Interfaz para las propiedades de la imagen de producto
interface ImagenProductoAttributes {
  id: number;
  ProductoId: number;
  UrlImagen: string;
}

// Interfaz para las propiedades opcionales de la imagen de producto
interface ImagenProductoCreationAttributes extends Optional<ImagenProductoAttributes, 'id'> {}

// Interfaz para la instancia de una imagen de producto
interface ImagenProductoInstance extends Model<ImagenProductoAttributes, ImagenProductoCreationAttributes>, ImagenProductoAttributes {
  // Aquí puedes definir métodos adicionales si los necesitas
}

export { ImagenProductoInstance };
