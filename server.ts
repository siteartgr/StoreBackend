import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import customerRoutes from '../Back-end/src/routes/customer.routes';
import productRoutes from '../Back-end/src/routes/product.routes';
import orderRoutes from '../Back-end/src/routes/order.routes';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mydatabase');

app.use('/customers', customerRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
