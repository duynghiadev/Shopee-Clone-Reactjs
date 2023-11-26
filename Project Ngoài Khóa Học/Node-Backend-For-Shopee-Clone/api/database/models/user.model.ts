import mongoose, { Schema } from 'mongoose'
import { ROLE } from '../../constants/role.enum'

const UserSchema = new Schema(
  {
    email: { type: String, required: true, minlength: 5, maxlength: 160 },
    name: { type: String, maxlength: 160 },
    password: { type: String, required: true, minlength: 6, maxlength: 160 },
    date_of_birth: { type: Date, maxlength: 160 },
    address: { type: String, maxlength: 160 },
    phone: { type: String, maxlength: 20 },
    roles: { type: [String], required: true, default: [ROLE.USER] },
    avatar: { type: String, maxlength: 1000 },
  },
  {
    timestamps: true,
  }
)

export const UserModel = mongoose.model('users', UserSchema)
