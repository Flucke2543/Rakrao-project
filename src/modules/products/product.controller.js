let products = []; // ที่เก็บข้อมูลชั่วคราว
let currentId = 1; 
exports.getAllProducts = (req, res) => {
    res.json(products);
};
// ระบบเพิ่มสินค้า
exports.createProduct = (req, res) => {
  const { name, price } = req.body;

  if (!name || typeof price !== 'number') {
    return res.status(400).json({
      message: 'name ต้องมี และ price ต้องเป็นตัวเลข'
    });
  }

  const product = {
  id: currentId++,
  name,
  price
};

  products.push(product);
  res.status(201).json(product);
};
// ระบบลบสินค้า
exports.deleteProduct = (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'ไม่พบสินค้า' });
  }

  products.splice(index, 1);
  res.json({ message: 'ลบสินค้าแล้ว' });
};

// ระบบแก้ไขสินค้า
exports.updateProduct = (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'ไม่พบสินค้า' });
  }

  products[index] = {
    ...products[index],
    ...req.body
  };
  res.json(products[index]);
};
