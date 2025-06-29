const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  nama_barang: {
    type: String,
    required: true
  },
  harga: {
    type: Number,
    required: true
  },
  stok: {
    type: Number,
    required: true
  },
  kategori: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Item', itemSchema);