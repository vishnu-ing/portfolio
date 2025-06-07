
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import { Toaster } from '@/components/ui/toaster';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background scanlines">
      <Navigation />
      <main className="pt-20">
        <Outlet />
      </main>
      <Toaster />
    </div>
  );
};

export default Layout;
