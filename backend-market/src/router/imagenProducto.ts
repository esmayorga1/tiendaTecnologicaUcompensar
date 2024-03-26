import { Router } from 'express';
import { deleteImagProduct, getImagProductById, getImagenProduct, postImagProduct, updateImagProduct } from '../controloller/imagenProduct';

const router = Router();

router.get('/', getImagenProduct)
router.get('/:id', getImagProductById);
router.delete('/:id', deleteImagProduct)
router.post('/', postImagProduct);
router.put('/:id', updateImagProduct )

export default router