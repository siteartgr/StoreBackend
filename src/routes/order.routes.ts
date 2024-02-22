import express from 'express';
import orderController from '../controllers/order.controller';

const router = express.Router();

// Routes for all orders
router.get('/orders', orderController.getAllOrders);

// Routes for orders specific to a customer
router.get('/:customerId/orders', orderController.getAllOrdersForCustomer);
router.post('/:customerId/orders', orderController.createOrderForCustomer);
router.delete('/:customerId/orders/:orderId', orderController.deleteOrderForCustomer);

export default router;
