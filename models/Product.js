const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  condition: { type: String, enum: ['new', 'used'], default: 'used' },
  category: String,
  stock: { type: Number, default: 0 },
  image: String, // bisa URL nanti
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
