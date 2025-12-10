import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
      <div className="container mx-auto px-6">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Tech-Driven Nurse. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2 uppercase tracking-widest">
          Empowering Healthcare Through Technology
        </p>
      </div>
    </footer>
  );
};