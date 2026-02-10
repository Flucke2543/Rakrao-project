const express = require('express');
const router = express.Router();

const productController =
  require('../modules/products/product.controller');

// ดูสินค้าทั้งหมด
router.get('/', productController.getAllProducts);

// เพิ่มสินค้า
router.post('/', productController.createProduct);

// แก้สินค้า
router.put('/:id', productController.updateProduct);

// ลบสินค้า
router.delete('/:id', productController.deleteProduct);

module.exports = router;

