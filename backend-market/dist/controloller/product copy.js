"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = exports.updateProduct = exports.postProduct = exports.deleteProduct = exports.getProduct = void 0;
const producto_1 = __importDefault(require("../model/producto"));
const imagenProducto_1 = __importDefault(require("../model/imagenProducto"));
/*
export const getProducts = async (req: Request, res: Response) => {
  const listProducts = await Product.findAll()

  res.json(listProducts)
}*/
const getProduct = async (req, res) => {
    const { id } = req.params;
    const product = await producto_1.default.findByPk(id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
};
exports.getProduct = getProduct;
// Eliminar producto
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const product = await producto_1.default.findByPk(id);
    if (!product) {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
    else {
        await product.destroy();
        res.json({
            msg: 'El producto fue eliminado con exito!'
        });
    }
};
exports.deleteProduct = deleteProduct;
// Agregar Producto
const postProduct = async (req, res) => {
    const { body } = req;
    try {
        await producto_1.default.create(body);
        res.json({
            msg: `El producto fue agregado con exito!`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
};
exports.postProduct = postProduct;
// Modificar producto
const updateProduct = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
        const product = await producto_1.default.findByPk(id);
        if (product) {
            await product.update(body);
            res.json({
                msg: 'El producto fue actualziado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un producto con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
};
exports.updateProduct = updateProduct;
//--------------------------------------------------------------------------------------------------
const getProducts = async (req, res) => {
    try {
        const listProducts = await producto_1.default.findAll({
            include: imagenProducto_1.default
        });
        console.log("vas bien");
        /*
            const formattedProducts = listProducts.map(product => {
              const productInstance = product as ProductInstance; // Asegúrate de que TypeScript entienda que product es de tipo ProductInstance
              return {
                id: productInstance.id,
                name: productInstance.Nombre,
                marca: productInstance.Marca,
                description: productInstance.Descripcion,
                imagUrl: productInstance.Imagenes.map((imagen: any) => imagen.Urlmagen), // Mapea las URLs de las imágenes
                precio_venta: productInstance.PrecioVenta,
                precio_regular: productInstance.PrecioRegular,
                slug: productInstance.Slug,
                fecha_lanzamiento: productInstance.FechaLanzamiento
              };
            });
        
            res.json(formattedProducts);*/
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al obtener los productos' });
    }
};
exports.getProducts = getProducts;
/*export const getProducts = (req: Request, res: Response) => {


   res.json({
    msg: 'getprodts',
  });
};*/
/*
export const getProduct = (req: Request, res: Response) => {
  res.json({
    msg: 'getprodts',
    id: req.params.id
  });
};*/
/*
export const deleteProduct = (req: Request, res: Response) => {
    res.json({
      msg: 'getprodts',
      id: req.params.id
    });
  };


 
 
 

 
 
 
 
 
 
 
 
 
 


export const postProduct = (req: Request, res: Response) => {
    const { body } = req;
    res.json({
      msg: 'getprodts',
      body: body
    });
  };


  export const updateProduct = (req: Request, res: Response) => {
    const { body } = req;

    
    res.json({
      msg: 'getprodts',
      id: req.params.id,
      body: body
    });
  };*/
