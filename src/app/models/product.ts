export interface Product{
    id?: string;
    Nombre: string;
    Descripcion: string;
    Marca?: string;
    categoria: string[];
    ImagenProductos?: string[];
    imagUrl?: string[];
    PrecioVenta: number;
    PrecioRegular: number;
    Slug?: string;
    FechaLanzamiento ?: Date;
}

/*
export interface Product{
    id: string;
    name: string;
    description: string;
    marca?: string;
    fecha_lanzamiento?: Date
    categoria: string[];
    imagUrl: string[];
    precio_venta: number;
    precio_regular: number;
    slug?: string;
    create_ar?: Date;
    date?: Date;

}*/

