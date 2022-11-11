import mongoose, { Schema } from 'mongoose';
import User from '../models/Users/User.model';

const userschema: Schema =   new Schema<User>({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  email_token: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    default: function(){
      return Date.now()
    }
  },
  updated_at: {
    type: Date,
    default: function(){
      return Date.now()
    }
  }
})

export default mongoose.model('User', userschema)