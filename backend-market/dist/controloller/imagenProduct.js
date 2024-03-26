"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateImagProduct = exports.postImagProduct = exports.deleteImagProduct = exports.getImagProductById = exports.getImagenProduct = void 0;
const express_1 = require("express");
const imagenProducto_1 = __importDefault(require("../model/imagenProducto"));
const imagenProducto = (0, express_1.Router)();
// Consultar toda la tabla
const getImagenProduct = async (req, res) => {
    try {
        const listImagProducts = await imagenProducto_1.default.findAll({});
        res.json(listImagProducts);
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json({
            msg: 'Error al obtener los datos de la tabla imágenes productos',
        });
    }
};
exports.getImagenProduct = getImagenProduct;
// Consultar por Id
const getImagProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const ImagProduct = await imagenProducto_1.default.findByPk(id);
        if (ImagProduct) {
            res.json(ImagProduct);
        }
        else {
            res.status(404).json({
                msg: `No existe un Imagen del producto con el id ${id}`,
            });
        }
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ msg: 'Error al obtener el id de la imagen del producto' });
    }
};
exports.getImagProductById = getImagProductById;
// Eliminar Producto por Id
const deleteImagProduct = async (req, res) => {
    const { id } = req.params;
    const imagProduct = await imagenProducto_1.default.findByPk(id);
    if (!imagProduct) {
        res.status(404).json({
            msg: `No existe la imagen producto con el id ${id}`,
        });
    }
    else {
        await imagProduct.destroy();
        res.json({
            msg: 'La imagen producto fue eliminado con exito!',
        });
    }
};
exports.deleteImagProduct = deleteImagProduct;
// Agregar una imagen del producto
const postImagProduct = async (req, res) => {
    const { body } = req;
    try {
        await imagenProducto_1.default.create(body);
        res.json({
            msg: `La imagen del producto fue agregado con exito!`,
        });
    }
    catch (error) {
        // Si el error es debido a que el campo ProductoId no tiene valor predeterminado
        // y no quieres que aparezca el mensaje de error en la respuesta
        if (error.name === 'SequelizeDatabaseError' && error.parent && error.parent.errno === 1364) {
            res.json({
                msg: `La imagen del producto fue agregado con exito!`,
            });
        }
        else {
            console.log(error);
            res.status(500).json({
                msg: `Upps ocurrio un error, comuniquese con soporte`,
            });
        }
    }
};
exports.postImagProduct = postImagProduct;
// Editar la imagen del producto
const updateImagProduct = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
        const imagProduct = await imagenProducto_1.default.findByPk(id);
        if (imagProduct) {
            await imagProduct.update(body);
            res.json({
                msg: 'La imagen producto fue actualziado con exito',
            });
        }
        else {
            res.status(404).json({
                msg: `No existe la imagen del producto con el id ${id}`,
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
exports.updateImagProduct = updateImagProduct;
