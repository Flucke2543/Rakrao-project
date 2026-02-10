let products = []; // ที่เก็บข้อมูลชั่วคราว
exports.getAllProducts = (req, res) => {
    res.json(products);
};
exports.createProduct = (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };
    products.push(newProduct);
    res.status(201).json({ message: "สำเร็จ", data: newProduct });
};
// ระบบลบสินค้า
exports.deleteProduct = (req, res) => {
    const id = Number(req.params.id);
    // กรองเอาตัวที่ id ไม่ตรงเก็บไว้ (ตัวที่ตรงกับ id ที่ส่งมาจะหายไป)
    products = products.filter(p => p.id !== id); 
    res.json({ message: "ลบสำเร็จ" });
};

// ระบบแก้ไขสินค้า
exports.updateProduct = (req, res) => {
    const id = Number(req.params.id);
    const { name, price } = req.body;
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products[index] = { id, name, price };
        res.json({ message: "แก้ไขสำเร็จ" });
    }
};
