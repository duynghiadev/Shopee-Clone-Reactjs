import mongoose, { Schema } from "mongoose"
const AccessTokenSchema = new Schema({
  user_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'users' },
  token: { type: String, unique: true }
}, {
  timestamps: true
});

export const AccessTokenModel = mongoose.model('access_tokens', AccessTokenSchema)