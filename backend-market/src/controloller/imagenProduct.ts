import { Request, Response, Router } from 'express';

import ImagenProducto from '../model/imagenProducto';

const imagenProducto = Router();

// Consultar toda la tabla
export const getImagenProduct = async (req: Request, res: Response) => {
  try {
    const listImagProducts = await ImagenProducto.findAll({});
    res.json(listImagProducts);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        msg: 'Error al obtener los datos de la tabla imágenes productos',
      });
  }
};

// Consultar por Id
export const getImagProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const ImagProduct = await ImagenProducto.findByPk(id);

    if (ImagProduct) {
      res.json(ImagProduct);
    } else {
      res.status(404).json({
        msg: `No existe un Imagen del producto con el id ${id}`,
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: 'Error al obtener el id de la imagen del producto' });
  }
};

// Eliminar Producto por Id
export const deleteImagProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const imagProduct = await ImagenProducto.findByPk(id);
  if (!imagProduct) {
    res.status(404).json({
      msg: `No existe la imagen producto con el id ${id}`,
    });
  } else {
    await imagProduct.destroy();
    res.json({
      msg: 'La imagen producto fue eliminado con exito!',
    });
  }
};



// Agregar una imagen del producto
export const postImagProduct = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    await ImagenProducto.create(body);

    res.json({
      msg: `La imagen del producto fue agregado con exito!`,
    });
  } catch (error: any) {
    // Si el error es debido a que el campo ProductoId no tiene valor predeterminado
    // y no quieres que aparezca el mensaje de error en la respuesta
    if (error.name === 'SequelizeDatabaseError' && error.parent && error.parent.errno === 1364) {
      res.json({
        msg: `La imagen del producto fue agregado con exito!`,
      });
    } else {
      console.log(error);
      res.status(500).json({
        msg: `Upps ocurrio un error, comuniquese con soporte`,
      });
    }
  }
};































// Editar la imagen del producto

export const updateImagProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;

  try {
    const imagProduct = await ImagenProducto.findByPk(id);

    if (imagProduct) {
      await imagProduct.update(body);
      res.json({
        msg: 'La imagen producto fue actualziado con exito',
      });
    } else {
      res.status(404).json({
        msg: `No existe la imagen del producto con el id ${id}`,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      msg: `Upps ocurrio un error, comuniquese con soporte`,
    });
  }
};


