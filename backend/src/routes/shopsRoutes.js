import { Router } from 'express';

import { getShopById, getShops } from '../controllers/shopsController.js';
import { createOrder, getOrders } from '../controllers/orderController.js';
import { celebrate } from 'celebrate';
import { createOrderSchema } from '../validations/ordersValidation.js';
import { shopIdParamSchema } from '../validations/shopValidation.js';

const router = Router();

router.get('/shops', getShops);
router.get('/shops/:shopId', celebrate(shopIdParamSchema), getShopById);
router.post('/order', celebrate(createOrderSchema), createOrder);
router.get('/order', getOrders);

export default router;
