import mongoose, { Schema, Document } from 'mongoose';

export interface Order extends Document {
  products: string; 
  customer: string; 
  orderDate: Date;
  customerName: string;
}

const orderSchema: Schema = new Schema({
  products: [{ type: String }],
  customer: { type: String , required: true },
  orderDate: { type: Date, default: Date.now },
  customerName: { type: String }

});

export default mongoose.model<Order>('Order', orderSchema);
