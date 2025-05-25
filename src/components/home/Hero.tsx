import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-lime-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFYwYzkuOTQgMCAxOCA4LjA2IDE4IDE4aDEuNWE0LjUgNC41IDAgMDA0LjUtNC41VjEzYTQgNCAwIDAwNC00SDM2eiIgZmlsbD0icmdiYSgxMDQsIDExNywgMjQ1LCAwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-gray-700 animate-fade-in">
            <Code className="h-4 w-4 text-cyan-500 mr-2" />
            <span className="text-sm">Transforming ideas into digital reality</span>
          </div>
          
          <h1 className="mb-6 animate-fade-in">
            <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-white">Powering Ideas with</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400 animate-pulse-glow">
              Code & Innovation
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
            We're a team of passionate developers, designers, and strategists crafting cutting-edge digital solutions that help businesses thrive in the digital age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
            <Link to="/portfolio" className="btn btn-primary">
              See Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;