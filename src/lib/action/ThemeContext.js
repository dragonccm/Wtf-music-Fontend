// ThemeContext.js
import React from 'react';

const ThemeContext = React.createContext({
  theme: 'light', // Giá trị mặc định là 'light'
  toggleTheme: () => {}, // Hàm để thay đổi chủ đề
});

export default ThemeContext;