import React from 'react';
import { Users, Trophy, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: <Users className="h-6 w-6" />, value: '20+', label: 'Clients' },
    { icon: <Trophy className="h-6 w-6" />, value: '30+', label: 'Projects' },
    { icon: <CheckCircle className="h-6 w-6" />, value: '2+', label: 'Years Experience' },
  ];

  const values = [
    {
      title: "Our Mission",
      description: "To deliver innovative digital solutions that empower businesses to thrive in the modern digital landscape."
    },
    {
      title: "Our Vision",
      description: "To become the leading technology partner for businesses seeking digital transformation and growth."
    },
    {
      title: "Our Approach",
      description: "We combine technical expertise with creative thinking to deliver solutions that exceed expectations."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Softpool Tech
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Your trusted partner in digital transformation and technological innovation
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="flex justify-center text-cyan-400 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gray-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Expertise & Experience</h3>
              <p className="text-gray-300">
                With over 2 years of experience and 30+ successful projects, we bring deep technical expertise and industry knowledge to every project.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Client-Focused Approach</h3>
              <p className="text-gray-300">
                We prioritize understanding your business needs and delivering solutions that drive real value and growth.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-300">
                We stay ahead of technological trends to provide cutting-edge solutions that give you a competitive edge.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Quality & Reliability</h3>
              <p className="text-gray-300">
                Our commitment to quality and reliable support ensures your success long after project completion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;