const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 3001;

app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'glowlist_db'
});

db.connect(err => {
    if (err) {
        console.error('Gagal konek ke database:', err);
    } else {
        console.log('Berhasil konek ke database GlowList');
    }
});

app.get('/', (req, res) => {
  res.send('Selamat Datang di GlowList API 💄');
});

app.listen(PORT, () => {
  console.log(`Server GlowList jalan di http://localhost:${PORT}`);
});