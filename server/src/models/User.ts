import { Schema, model } from 'mongoose';

interface User {
  email: string;
  password: string;
  role: String,
  id: String
}

const UserSchema = new Schema<User>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
});

export default model<User>('User', UserSchema);
