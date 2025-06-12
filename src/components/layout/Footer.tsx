import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Mail, Phone, MapPin, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-950 pt-16 pb-8 relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold mb-4">
              <Code className="h-8 w-8 text-cyan-500" />
              <span className="text-white">Softpool <span className="text-cyan-500">Technologies</span></span>
            </Link>
            <p className="text-gray-400 mb-4">
              Empowering businesses with innovative digital solutions. We create cutting-edge solutions that help businesses thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/softpool-technologies/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Internship', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Web Development', 
                'IT Solutions', 
                'WhatsApp Marketing', 
                'Social Media Marketing', 
                'Design & Creatives',
                'Professional Training'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">No:1/222 Softpool Technologies, Rajaji Salai, Pudupakkam, inside Lakshya Gardens, Kelambakkam, Chennai, Tamil Nadu 603103</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                <a href="tel:+919385661495" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  +91 93856 61495
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                <a href="mailto:mail@softpooltech.in" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  mail@softpooltech.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={scrollToTop}
            className="group bg-gradient-to-r from-cyan-500 to-lime-500 hover:from-cyan-400 hover:to-lime-400 text-white p-3 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-950"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6 group-hover:animate-bounce" />
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Softpool Technologies. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
              <Link to="/legal" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">
                Privacy Policy & Terms
              </Link>
              <Link to="/refund-policy" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">
                Refund Policy
              </Link>
              <Link to="/shipping-delivery" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">
                Shipping & Delivery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;