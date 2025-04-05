
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 text-center">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-center">
          <div className="w-16 h-px bg-lightest-navy mr-4"></div>
          <a href="#" className="text-teal hover:text-white transition-colors">
            <span className="text-teal">{"<"}</span>
            <span className="text-white">FL</span>
            <span className="text-teal">{"/>"}</span>
          </a>
          <div className="w-16 h-px bg-lightest-navy ml-4"></div>
        </div>
        
        <p className="text-light-slate text-sm flex items-center justify-center">
          Designed & Built with 
          <Heart size={14} className="mx-1 text-pink" fill="currentColor" />
          by Frontend Lead
        </p>
        
        <p className="text-slate text-xs mt-2">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
