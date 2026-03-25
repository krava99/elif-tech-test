import { celebrate } from 'celebrate';
import { Router } from 'express';
import { createOrderSchema } from '../validations/ordersValidation.js';
import { createOrder, getOrders } from '../controllers/orderController.js';

const router = Router();

router.post('/', celebrate(createOrderSchema), createOrder);
router.get('/', getOrders);

export default router;
