"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = exports.updateProduct = void 0;
const express_1 = require("express");
const producto_1 = __importDefault(require("../model/producto"));
const imagenProducto_1 = __importDefault(require("../model/imagenProducto"));
const producto = (0, express_1.Router)();
const updateProduct = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
        const product = await producto_1.default.findByPk(id);
        if (product) {
            await product.update(body);
            res.json({
                msg: 'El producto fue actualziado con exito',
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un producto con el id ${id}`,
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`,
        });
    }
};
exports.updateProduct = updateProduct;
const getProducts = async (req, res) => {
    try {
        const listProducts = await producto_1.default.findAll({
            include: imagenProducto_1.default,
        });
        console.log('vas bien');
        res.json(listProducts);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al obtener los productos 2' });
    }
};
exports.getProducts = getProducts;
const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await producto_1.default.findByPk(id, {
            include: imagenProducto_1.default, // Incluye la relación con ImagenProducto
        });
        if (product) {
            res.json(product);
        }
        else {
            res.status(404).json({
                msg: `No existe un producto con el id ${id}`,
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al obtener el producto' });
    }
};
exports.getProduct = getProduct;
// Eliminar producto
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        // Find the product
        const product = await producto_1.default.findByPk(id);
        if (!product) {
            return res.status(404).json({
                msg: `No existe un producto con el id ${id}`,
            });
        }
        // Find all associated ImagenProducto records (if required)
        const imagenProducts = await imagenProducto_1.default.findAll({
            where: {
                ProductoId: id,
            },
        });
        // Delete the associated ImagenProducto records (if any)
        if (imagenProducts.length > 0) {
            await Promise.all(imagenProducts.map((imagenProduct) => imagenProduct.destroy()));
        }
        // Delete the product
        await product.destroy();
        res.json({
            msg: 'El producto fue eliminado con exito!',
        });
    }
    catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({
            msg: 'Error al eliminar el producto',
        });
    }
};
exports.deleteProduct = deleteProduct;
const postProduct = async (req, res) => {
    const { body } = req;
    try {
        await producto_1.default.create(body);
        await imagenProducto_1.default.create(body);
        res.json({
            msg: `El producto fue agregado con exito!`,
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`,
        });
    }
};
exports.postProduct = postProduct;
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
/*
export const getProducts = async (req: Request, res: Response) => {
  const listProducts = await Product.findAll()

  res.json(listProducts)
}*/
/*
export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);

  if (product) {
      res.json(product)
  } else {
      res.status(404).json({
          msg: `No existe un producto con el id ${id}`
      })
  }
}*/
// Eliminar producto
// export const deleteProduct = async (req: Request, res: Response) => {
// const { id } = req.params;
// const product = await Product.findByPk(id);
// if (!product) {
// res.status(404).json({
// msg: `No existe un producto con el id ${id}`
// })
// } else {
// await product.destroy();
// res.json({
// msg: 'El producto fue eliminado con exito!'
// })
// }
// }
// Agregar Producto
// export const postProduct = async (req: Request, res: Response) => {
// const { body } = req;
//
// try {
// await Product.create(body);
//
// res.json({
// msg: `El producto fue agregado con exito!`
// })
// } catch (error) {
// console.log(error);
// res.json({
// msg: `Upps ocurrio un error, comuniquese con soporte`
// })
// }
// }
//
