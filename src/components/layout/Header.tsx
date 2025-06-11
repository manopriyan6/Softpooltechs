import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Services', path: '/services' },
    { text: 'Portfolio', path: '/portfolio' },
    { text: 'Internship', path: '/internship' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <Code className="h-8 w-8 text-cyan-500" />
            <span className="text-white">Soft<span className="text-cyan-500">pool</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-cyan-400 ${
                  location.pathname === link.path ? 'text-cyan-400' : 'text-gray-200'
                }`}
              >
                {link.text}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary">Get Quote</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-200 hover:text-cyan-400 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-md z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xl font-medium transition-colors hover:text-cyan-400 ${
                location.pathname === link.path ? 'text-cyan-400' : 'text-gray-200'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="btn btn-primary mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;