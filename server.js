// Import các module cần thiết
const express = require('express');

// Tạo một ứng dụng Express
const app = express();
const port = 5000; // Chọn một cổng theo ý bạn, ví dụ: 5000

// Định nghĩa API cho /api/rootapi
app.get('/api/rootapi', (req, res) => {
  res.json({ message: 'Hello from rootapi!' });
});

// Middleware để xử lý lỗi 404 (Không tìm thấy đường dẫn)
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Middleware để xử lý lỗi 500 (Lỗi nội bộ server)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Lắng nghe các kết nối đến cổng đã chọn
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
