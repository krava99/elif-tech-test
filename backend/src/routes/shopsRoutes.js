import { Router } from 'express';
import { getProductsByShop, getShops } from '../controllers/shopsController.js';
import { celebrate } from 'celebrate';
import { shopIdParamSchema } from '../validations/shopValidation.js';

const router = Router();

router.get('/', getShops);
router.get(
  '/:shopId/products',
  celebrate(shopIdParamSchema),
  getProductsByShop,
);

export default router;
