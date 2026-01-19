# 🌳 Rakrao (รากเรา)
แพลตฟอร์มอีคอมเมิร์ซชุมชนไทย เพื่อคนไทยร่วมท้องถิ่น

rakrao-ecommerce/
├── src/
│   ├── modules/
│   │   ├── users/        # ระบบสมาชิกชุมชน
│   │   ├── products/     # สินค้าท้องถิ่น
│   │   └── orders/       # การสั่งซื้อและการจัดส่ง
│   └── server.js         # ไฟล์หลักรันระบบ
├── docker-compose.yml    # ไฟล์สำหรับรันทุกอย่าง (App + DB)
├── Dockerfile            # ไฟล์แพ็กเกจระบบ
├── .gitignore            # ไฟล์ระบุสิ่งที่ไม่ต้องเอาขึ้น GitHub (node_modules, .env)
└── README.md             # อธิบายโปรเจกต์ "รากเรา"
