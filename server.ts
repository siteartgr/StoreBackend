import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import customerRoutes from './src/routes/customer.routes';
import productRoutes from './src/routes/product.routes';
import orderRoutes from './src/routes/order.routes';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost:27017/mydatabase');
mongoose.connect('mongodb+srv://siteartgr:mongodbpass@cluster0.f13dxaw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.use('/customers', customerRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
