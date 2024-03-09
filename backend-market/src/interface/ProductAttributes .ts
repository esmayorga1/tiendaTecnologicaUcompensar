// types.ts

import { Model, Optional } from 'sequelize';
import { ImagenProductoInstance } from '../interface/ImagenProductoAttributes'; // Asumiendo que tengas una interfaz para las imágenes de producto

// Interfaz para las propiedades del producto
interface ProductAttributes {
  id: number;
  Nombre: string;
  Descripcion: string | null;
  Marca: string | null;
  PrecioVenta: number;
  PrecioRegular?: number | null;
  Slug: string | null;
  FechaLanzamiento: Date;
}

// Interfaz para las propiedades opcionales del producto
interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {}

// Interfaz para la instancia de un producto
interface ProductInstance extends Model<ProductAttributes, ProductCreationAttributes>, ProductAttributes {
  // Aquí puedes definir métodos adicionales si los necesitas
  Imagenes: ImagenProductoInstance[]; // Relación con las imágenes de producto
}

export { ProductInstance };
