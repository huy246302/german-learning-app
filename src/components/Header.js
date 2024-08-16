// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const Header = ({ user }) => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">German Learning App</h1>
        <ul className="flex space-x-4 items-center">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/vocabulary" className="hover:underline">Vocabulary</Link></li>
          <li><Link to="/grammar-formulas" className="hover:underline">Grammar Formulas</Link></li>
          <li><Link to="/grammar" className="hover:underline">Grammar</Link></li>
          <li><Link to="/listening" className="hover:underline">Listening</Link></li>
          {user ? (
            <>
              <li className="ml-4">Welcome, {user.displayName || user.email}</li>
              <li><button onClick={handleSignOut} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Sign Out</button></li>
            </>
          ) : (
            <>
              <li><Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign Up</Link></li>
              <li><Link to="/signin" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Sign In</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
