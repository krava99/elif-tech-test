import { Router } from 'express';
import { getProductById } from '../controllers/shopsController.js';
import { celebrate } from 'celebrate';

import { createProduct } from '../controllers/productController.js';
import { createProductSchema } from '../validations/productsValidation.js';

const router = Router();

router.get('/:id', getProductById);
router.post('/', celebrate(createProductSchema), createProduct);

export default router;
