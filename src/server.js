const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// ดึงสมองส่วนสินค้า (เดี๋ยวเราจะสร้างไฟล์นี้ใน Step ถัดไป)
const productController = require('./modules/products/product.controller');

app.use(express.json());

// หน้าแรก: ส่งไฟล์หน้าบ้านไปแสดงผล
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// เส้นทาง API
app.get('/api/products', productController.getAllProducts);
app.post('/api/products', productController.createProduct);

app.listen(port, () => {
    console.log(`🌳 Rakrao System running at http://localhost:${port}`);
});
