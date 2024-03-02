const path = require('path');

module.exports = {
  // Các cấu hình khác của Webpack
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          // Các loader khác
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                // Tùy chỉnh giá trị biến Less
                'primary-color': 'red',
              },
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },
};