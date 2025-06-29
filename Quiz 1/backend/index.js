const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Ganti dengan URL MongoDB Anda
const MONGO_URI = "mongodb://localhost:27017/tokoku";

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Terhubung ke Database'));

app.use(cors());
app.use(express.json());

const itemsRouter = require('./routes/items');
app.use('/items', itemsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));