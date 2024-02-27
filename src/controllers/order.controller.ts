import { Request, Response } from 'express';
import Order, { Order as OrderModel } from '../models/order.model';

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllOrdersForCustomer = async (req: Request, res: Response) => {
  const customerId = req.params.customerId;

  try {
    const orders = await Order.find({ customerId });
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createOrderForCustomer = async (req: Request, res: Response) => {
 ;
  const { customerId, products, orderDate, customerName } = req.body;

  try {
    const newOrder: OrderModel = new Order({ customer: customerId, products, orderDate, customerName });
    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const deleteOrderForCustomer = async (req: Request, res: Response) => {
  const orderId = req.params.orderId;
  const customerId = req.params.customerId;

  try {
    const deletedOrder = await Order.findOneAndDelete({ _id: orderId, customerId });

    if (!deletedOrder) {
      return res.status(404).json({ error: 'Order not found for the specified customer' });
    }

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default {
  getAllOrdersForCustomer,
  createOrderForCustomer,
  deleteOrderForCustomer,
  getAllOrders
};
