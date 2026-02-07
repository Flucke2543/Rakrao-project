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
