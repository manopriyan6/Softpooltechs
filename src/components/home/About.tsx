import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Cpu } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />, value: '20+', label: 'Clients' },
    { icon: <Award className="h-5 w-5 sm:h-6 sm:w-6" />, value: '2+', label: 'Years Experience' },
    { icon: <Cpu className="h-5 w-5 sm:h-6 sm:w-6" />, value: '30+', label: 'Projects Completed' },
  ];

  const keyPoints = [
    'Experienced team of developers and designers',
    'Custom solutions tailored to your business needs',
    'Cutting-edge technologies and best practices',
    'Transparent communication and project management',
    'Ongoing support and maintenance services',
  ];

  return (
    <section className="section bg-gray-800 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left column: Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden neon-border">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team working together" 
                className="w-full h-auto"
              />
            </div>
            {/* Stats overlay - Optimized for mobile */}
            <div className="absolute -bottom-4 sm:-bottom-8 left-4 right-4 lg:-right-8 lg:left-auto lg:w-72 bg-gray-900/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-xl">
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center text-cyan-500 mb-1 sm:mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold glow-text">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Content */}
          <div className="mt-16 lg:mt-0">
            <div className="text-sm font-medium text-cyan-500 mb-2">ABOUT US</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Innovative Solutions for the Digital Age</h2>
            <p className="text-gray-300 mb-6">
              At Softpool Tech, we're passionate about creating digital solutions that drive business growth and improve user experiences. With our expertise in web and mobile development, we transform ideas into reality.
            </p>
            
            <div className="space-y-3 mb-8">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <p className="ml-3 text-gray-300">{point}</p>
                </div>
              ))}
            </div>
            
            <Link to="/about" className="btn btn-primary">
              More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;