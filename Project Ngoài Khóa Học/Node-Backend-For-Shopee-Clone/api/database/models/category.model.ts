import mongoose, { Schema } from 'mongoose'

const CategorySchema = new Schema({
  name: String
})

export const CategoryModel = mongoose.model('categories', CategorySchema)
