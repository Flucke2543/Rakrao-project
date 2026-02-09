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
// 2. ฟังก์ชันสำหรับ "ลบ" สินค้า
exports.deleteProduct = (req, res) => {
    const { id } = req.params; // รับ ID ที่จะลบจาก URL
    products = products.filter(p => p.id !== parseInt(id)); // กรองเอาตัวที่ไม่ใช่ออกไป
    res.json({ message: "ลบสินค้าเรียบร้อยแล้ว" });
};

// 3. ฟังก์ชันสำหรับ "แก้ไข" สินค้า
exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const index = products.findIndex(p => p.id === parseInt(id));

    if (index !== -1) {
        products[index] = { ...products[index], name, price };
        res.json({ message: "แก้ไขข้อมูลสำเร็จ", data: products[index] });
    } else {
        res.status(404).json({ message: "ไม่พบสินค้า" });
    }
};
