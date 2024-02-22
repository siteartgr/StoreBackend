import mongoose, { Schema, Document } from 'mongoose';

export interface Customer extends Document {
  username: string;
  password: string;
}

const customerSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model<Customer>('Customer', customerSchema);
