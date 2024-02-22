import mongoose, { Schema, Document } from 'mongoose';

export interface Order extends Document {
  products: string; 
  customer: string; 
  orderDate: Date;
}

const orderSchema: Schema = new Schema({
  products: [{ type: String }],
  customer: { type: String , required: true },
  orderDate: { type: Date, default: Date.now },

});

export default mongoose.model<Order>('Order', orderSchema);
