import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';

const LandingPage = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to German Learning App</h1>
      <p className="text-lg mb-8">Your ultimate tool for learning German vocabulary, grammar, and pronunciation.</p>
      <Link to="/vocabulary" className="bg-blue-500 text-white px-6 py-3 rounded shadow-lg hover:bg-blue-600 mr-4">
        Start Learning
      </Link>
    </div>
  );
};

export default LandingPage;
