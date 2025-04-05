
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "About", url: "#about" },
    { name: "Skills", url: "#skills" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" },
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy/90 shadow-lg backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-teal font-bold text-2xl">
          <span className="text-teal">{"<"}</span>
          <span className="text-white">FL</span>
          <span className="text-teal">{"/>"}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="nav-link"
            >
              <span className="text-teal mr-1">{`0${index + 1}.`}</span>
              {link.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4 btn-primary"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-teal p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 bg-light-navy/95 z-40 transition-all duration-300 ease-in-out transform ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } pt-24`}>
        <nav className="flex flex-col items-center space-y-6 p-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-xl font-semibold nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-teal mr-2">{`0${index + 1}.`}</span>
              {link.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 btn-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
