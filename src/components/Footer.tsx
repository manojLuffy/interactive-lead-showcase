
import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 text-center">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-center">
          <div className="w-16 h-px bg-lightest-navy mr-4"></div>
          <a href="#" className="text-teal hover:text-white transition-colors">
            <span className="text-teal">{"<"}</span>
            <span className="text-white">GS</span>
            <span className="text-teal">{"/>"}</span>
          </a>
          <div className="w-16 h-px bg-lightest-navy ml-4"></div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <a href="mailto:gaurav.sharma.290988@gmail.com" className="flex items-center text-light-slate hover:text-teal transition-colors">
            <Mail size={14} className="mr-2" />
            gaurav.sharma.290988@gmail.com
          </a>
          <a href="tel:+919711527037" className="flex items-center text-light-slate hover:text-teal transition-colors">
            <Phone size={14} className="mr-2" />
            +91 9711527037
          </a>
          <span className="flex items-center text-light-slate">
            <MapPin size={14} className="mr-2" />
            Bengaluru, India
          </span>
        </div>
        
        <p className="text-light-slate text-sm flex items-center justify-center">
          Designed & Built with 
          <Heart size={14} className="mx-1 text-pink" fill="currentColor" />
          by Gaurav Sharma
        </p>
        
        <p className="text-slate text-xs mt-2">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
