import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">German Learning App</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/vocabulary" className="hover:underline">Vocabulary</Link></li>
          <li><Link to="/grammar" className="hover:underline">Grammar</Link></li>
          <li><Link to="/listening" className="hover:underline">Listening</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
