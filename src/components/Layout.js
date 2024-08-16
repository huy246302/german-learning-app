// src/components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, user }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header user={user} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
