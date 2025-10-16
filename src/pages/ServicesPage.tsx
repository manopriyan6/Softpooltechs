import React from 'react';
import { Globe, MessageSquare, Palette, Code2, Share2 } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      price: "₹29,000",
      description: "Custom websites and web applications built with modern technologies.",
      features: [
        "Responsive Design",
        "E-commerce Solutions",
        "CMS Integration",
        "Performance Optimization",
        "API Development",
        "Web Maintenance"
      ]
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "IT Solutions",
      price: "₹19,000/month",
      description: "Comprehensive IT solutions to streamline your business operations.",
      features: [
        "Custom Software Development",
        "Cloud Solutions",
        "IT Consulting",
        "System Integration",
        "Database Management",
        "Technical Support"
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "WhatsApp Marketing",
      price: "₹12,000",
      description: "Effective WhatsApp marketing solutions for better customer engagement.",
      features: [
        "Campaign Management",
        "Automated Responses",
        "Bulk Messaging",
        "Lead Generation",
        "Analytics & Reporting",
        "Customer Support"
      ]
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Marketing",
      price: "₹10,000",
      description: "Strategic social media marketing to boost your online presence.",
      features: [
        "Content Strategy",
        "Social Media Management",
        "Paid Advertising",
        "Community Management",
        "Performance Analytics",
        "Brand Building"
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Creatives",
      price: "₹6,000",
      description: "Creative design solutions that make your brand stand out.",
      features: [
        "UI/UX Design",
        "Graphic Design",
        "Brand Identity",
        "Logo Design",
        "Marketing Materials",
        "Social Media Graphics"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Comprehensive digital solutions to help your business thrive
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-6">
                <div className="bg-gray-700/50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-cyan-400">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;