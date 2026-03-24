import { Router } from 'express';

import {
  getProductById,
  getProductsByShop,
  getShopById,
  getShops,
} from '../controllers/shopsController.js';
import { createOrder, getOrders } from '../controllers/orderController.js';
import { celebrate } from 'celebrate';
import { createOrderSchema } from '../validations/ordersValidation.js';
import { shopIdParamSchema } from '../validations/shopValidation.js';
import { createProduct } from '../controllers/productController.js';

const router = Router();

router.get('/shops', getShops);
router.get('/shops/:shopId', celebrate(shopIdParamSchema), getShopById);

router.get('/shops/:shopId/products', getProductsByShop); // Всі товари магазину
router.get('/products/:id', getProductById); // Деталі одного товару
router.post('/', createProduct);

router.post('/order', celebrate(createOrderSchema), createOrder);
router.get('/order', getOrders);

export default router;
