# Sử dụng một image Node.js làm base
# Bạn có thể thay đổi phiên bản Node.js và hệ điều hành (alpine là bản nhỏ gọn)
FROM node:20-alpine

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json (hoặc yarn.lock, pnpm-lock.yaml) vào thư mục làm việc
# Điều này giúp tận dụng Docker cache khi các dependency không thay đổi
COPY package*.json ./

# Cài đặt các dependencies
# Sử dụng npm ci để cài đặt chính xác các phiên bản trong package-lock.json
RUN npm ci

# Sao chép toàn bộ mã nguồn ứng dụng vào thư mục làm việc
COPY . .

# Nếu bạn có bước build cho ứng dụng frontend (ví dụ: React, Angular, Vue)
# Hãy thêm bước này:
# RUN npm run build

# Expose cổng mà ứng dụng Node.js của bạn sẽ lắng nghe
# Thay đổi 3000 thành cổng mà ứng dụng của bạn sử dụng
EXPOSE 3000

# Lệnh để chạy ứng dụng khi container khởi động
# Thay đổi "npm start" nếu bạn có một script khác để khởi động ứng dụng
CMD ["npm", "start"]