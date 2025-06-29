const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// GET: Lihat semua barang 
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST: Tambah barang baru 
router.post('/', async (req, res) => {
  const item = new Item({
    nama_barang: req.body.nama_barang,
    harga: req.body.harga,
    stok: req.body.stok,
    kategori: req.body.kategori
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET: Lihat barang berdasarkan ID (untuk halaman edit)
router.get('/:id', getItem, (req, res) => {
  res.json(res.item);
});


// PUT: Edit data barang 
router.put('/:id', getItem, async (req, res) => {
  if (req.body.nama_barang != null) {
    res.item.nama_barang = req.body.nama_barang;
  }
  if (req.body.harga != null) {
    res.item.harga = req.body.harga;
  }
  if (req.body.stok != null) {
    res.item.stok = req.body.stok;
  }
  if (req.body.kategori != null) {
    res.item.kategori = req.body.kategori;
  }

  try {
    const updatedItem = await res.item.save();
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Hapus barang 
router.delete('/:id', getItem, async (req, res) => {
  try {
    await res.item.deleteOne();
    res.json({ message: 'Barang berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware untuk mendapatkan barang berdasarkan ID
async function getItem(req, res, next) {
  let item;
  try {
    item = await Item.findById(req.params.id);
    if (item == null) {
      return res.status(404).json({ message: 'Tidak dapat menemukan barang' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.item = item;
  next();
}

module.exports = router;