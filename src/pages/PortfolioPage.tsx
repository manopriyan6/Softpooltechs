import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const PortfolioPage: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Chandru",
      role: "CEO",
      company: "Sporting Seeds",
      content: "Softpool Tech has been instrumental in bringing our vision to life. Their web development and digital marketing expertise have significantly improved our online presence and customer engagement.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      name: "Benzen A",
      role: "CEO",
      company: "Swirome Media Groups",
      content: "Working with Softpool Tech has been a game-changer for our media business. Their innovative solutions and professional approach have helped us achieve our digital transformation goals.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
    },
    {
      name: "Kamal Narendra",
      role: "President",
      company: "Rotary Club",
      content: "The dedication and expertise of the Softpool Tech team have been exceptional. They've helped us modernize our digital presence and better serve our community.",
      image: "/testimonials/kamal-narendra.jpg"
    }
  ];

  const clients = [
    {
      name: "Sporting Seeds",
      description: "Right Direction of Sports",
      logo: "/logos/sporting-seeds.png"
    },
    {
      name: "GOAT Sports Zone",
      description: "Sound Mind in a Sound Body",
      logo: "/logos/goat-sports.png"
    },
    {
      name: "Rotary International",
      description: "Service Above Self",
      logo: "/logos/rotary.png"
    },
    {
      name: "Madras Midtown Rotary Club",
      description: "Community Service Excellence",
      logo: "/logos/madras-midtown.png"
    },
    {
      name: "Swirome South Media",
      description: "Entertainment Events & Celebrity Coverage",
      logo: "/logos/swirome.png"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Success Stories
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Trusted by leading organizations across industries
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Clients</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="card p-8 flex flex-col items-center text-center group hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="w-full h-32 mb-6 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{client.name}</h3>
                <p className="text-gray-400">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;