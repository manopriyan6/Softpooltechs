import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold mb-4">
              <Code className="h-8 w-8 text-cyan-500" />
              <span className="text-white">Soft<span className="text-cyan-500">pool</span></span>
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
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
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
                'Design & Creatives'
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

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Softpool Tech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://softpooltech.in/privacy-policy" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">
                Privacy Policy
              </a>
              <a href="https://softpooltech.in/terms-of-service" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;