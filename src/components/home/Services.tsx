import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Share2, Palette, Code2, MessageSquare, BrainCircuit, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="card p-6 group hover:translate-y-[-5px]">
      <div className="bg-gray-700/50 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <Link to="/services" className="inline-flex items-center text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
        Learn more <ArrowRight className="ml-1 w-4 h-4" />
      </Link>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience."
    },
    {
      icon: <Code2 className="w-7 h-7" />,
      title: "IT Solutions",
      description: "Comprehensive IT solutions and custom software designed to address your specific business challenges."
    },
    {
      icon: <MessageSquare className="w-7 h-7" />,
      title: "WhatsApp Marketing",
      description: "Streamlined communication workflows with automated WhatsApp solutions for better customer engagement."
    },
    {
      icon: <Share2 className="w-7 h-7" />,
      title: "Social Media Marketing",
      description: "Strategic social media management and marketing to boost your brand's online presence and engagement."
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: "Design & Creatives",
      description: "Creative design solutions that enhance your brand identity and visual communication."
    }
  ];

  return (
    <section className="section bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-lime-500/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="text-sm font-medium text-cyan-500 mb-2">OUR SERVICES</div>
          <h2 className="section-title">What We Offer</h2>
          <p className="text-gray-400 max-w-2xl text-center mt-6">
            We provide end-to-end solutions tailored to your business needs, from design and development to marketing and maintenance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link to="/services" className="btn btn-primary">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;