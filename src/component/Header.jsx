import React from 'react';
import logo from '../assets/png-clipart-cooking-chef-restaurant-computer-icons-chef-kitchen.png'; // Đường dẫn đến hình ảnh

const Header = () => {
  return (
    <header className="flex items-center justify-center w-full p-6 shadow">
      <img
        src={logo}
        alt="Chef Claude Logo"
        className="w-20 h-12 mr-2"
      />
      <h1 className="text-xl font-medium text-gray-800">
        Chef Claude
      </h1>
    </header>
  );
};

export default Header;
