import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to German Learning App</h1>
      <p className="text-lg mb-8">Your ultimate tool for learning German vocabulary, grammar, and pronunciation.</p>
      <Link to="/vocabulary" className="bg-blue-500 text-white px-6 py-3 rounded shadow-lg hover:bg-blue-600">
        Start Learning
      </Link>
    </div>
  );
};

export default LandingPage;
