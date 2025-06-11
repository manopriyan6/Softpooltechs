import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Award, 
  Clock, 
  Users, 
  CheckCircle, 
  Star, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail,
  ExternalLink,
  Code,
  Palette,
  Bot,
  Cloud,
  Search,
  Shield,
  Smartphone,
  TrendingUp,
  ArrowRight,
  FileText,
  Globe,
  MessageCircle
} from 'lucide-react';

const InternshipPage: React.FC = () => {
  const domains = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web & Mobile Development",
      description: "Learn modern frameworks like React, Node.js, and mobile app development",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Master design principles, user research, and prototyping tools",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Python Automation",
      description: "Automate workflows, data processing, and build intelligent systems",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Computing & Hosting",
      description: "AWS, Azure, Docker, and modern deployment strategies",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Digital Marketing & SEO",
      description: "SEO optimization, content marketing, and analytics",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Machine Learning & AI",
      description: "Data science, neural networks, and AI model development",
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity",
      description: "Network security, ethical hacking, and security protocols",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Specialized Tracks",
      description: "IoT, Blockchain, DevOps, and emerging technologies",
      color: "from-lime-500 to-green-500"
    }
  ];

  const benefits = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Official Internship Offer Letter",
      description: "Receive a formal offer letter to kickstart your professional journey"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry-Recognized Certification",
      description: "Get certified credentials that employers value and recognize"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Real Project Experience",
      description: "Work on actual client projects and build your portfolio"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Expert Training",
      description: "Learn from industry professionals with years of experience"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "MSME Government Registration",
      description: "Official government recognition certificate included"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Flexible Learning Options",
      description: "Choose between virtual and in-person learning modes"
    }
  ];

  const programDetails = [
    { label: "Duration", value: "4 Weeks Intensive", icon: <Clock className="w-5 h-5" /> },
    { label: "Mode", value: "Virtual or In-person", icon: <MapPin className="w-5 h-5" /> },
    { label: "Level", value: "Beginner to Intermediate", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Prerequisites", value: "Basic domain knowledge", icon: <CheckCircle className="w-5 h-5" /> },
    { label: "Fee", value: "Nominal certification charges", icon: <Award className="w-5 h-5" /> },
    { label: "Seats", value: "Limited availability", icon: <Users className="w-5 h-5" /> }
  ];

  const steps = [
    {
      number: "1",
      title: "Complete Application",
      description: "Fill out our comprehensive application form with your details and preferences"
    },
    {
      number: "2",
      title: "Select Domain",
      description: "Choose your preferred specialization from our available tracks"
    },
    {
      number: "3",
      title: "Choose Mode",
      description: "Select between virtual or offline learning based on your convenience"
    },
    {
      number: "4",
      title: "Start Learning",
      description: "Begin your 4-week intensive journey with expert guidance"
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I need your help with the internship process. Could you please guide me through the steps?");
    window.open(`https://wa.me/919385661495?text=${message}`, '_blank');
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFYwYzkuOTQgMCAxOCA4LjA2IDE4IDE4aDEuNWE0LjUgNC41IDAgMDA0LjUtNC41VjEzYTQgNCAwIDAwNC00SDM2eiIgZmlsbD0icmdiYSgxMDQsIDExNywgMjQ1LCAwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center bg-gradient-to-r from-cyan-500/20 to-lime-500/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-cyan-500/30">
              <GraduationCap className="h-5 w-5 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-medium">Professional Learning Program</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Kickstart Your</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">
                Tech Career
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Join Softpool Technologies' comprehensive 4-week intensive internship program and transform your passion into professional expertise with hands-on experience and industry recognition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://forms.gle/9katNmrstipNrsqt7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary text-lg px-8 py-4"
              >
                Apply Now
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
              <button 
                onClick={handleWhatsAppClick}
                className="btn btn-outline text-lg px-8 py-4 hover:bg-green-500/10 hover:border-green-500 hover:text-green-400 transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Get WhatsApp Help
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">4 Weeks</h3>
              <p className="text-gray-400">Intensive Program</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-lime-500 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-lime-400 mb-2">8+</h3>
              <p className="text-gray-400">Specialized Domains</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-purple-400 mb-2">100%</h3>
              <p className="text-gray-400">Certification Rate</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-orange-400 mb-2">Expert</h3>
              <p className="text-gray-400">Industry Training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Domains */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Available Domains</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose from our comprehensive range of technology domains and start your journey in your preferred field
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain, index) => (
              <div key={index} className="group">
                <div className="card p-6 h-full hover:transform hover:scale-105 transition-all duration-300">
                  <div className={`bg-gradient-to-r ${domain.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
                    {domain.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {domain.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What You'll Get</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our comprehensive program provides everything you need to launch your tech career successfully
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card p-6 group hover:bg-gray-800/50 transition-all duration-300">
                <div className="bg-cyan-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-cyan-400 group-hover:bg-cyan-500/30 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Program Details</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to know about our internship program structure and requirements
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programDetails.map((detail, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-cyan-500/50 transition-colors">
                  <div className="flex items-center mb-3">
                    <div className="text-cyan-400 mr-3">
                      {detail.icon}
                    </div>
                    <h3 className="font-semibold text-gray-300">{detail.label}</h3>
                  </div>
                  <p className="text-lg font-bold text-white">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How to Apply</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Follow these simple steps to secure your spot in our internship program
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-cyan-500 to-lime-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full">
                      <ArrowRight className="w-6 h-6 text-gray-600 mx-auto" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Apply Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-lime-500/10 border-t border-cyan-500/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-lg p-6 mb-12">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-400 mr-2" />
                <span className="text-red-400 font-bold text-lg">Limited Seats Available!</span>
              </div>
              <p className="text-gray-300">
                Don't miss out on this opportunity to transform your career. Apply now to secure your spot in our next batch.
              </p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Start Your Journey?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Apply Now</h3>
                <p className="text-gray-400 mb-6">
                  Complete our application form and take the first step towards your tech career.
                </p>
                <a 
                  href="https://forms.gle/9katNmrstipNrsqt7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full"
                >
                  Fill Application Form
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
              
              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-6 text-lime-400">Need Guidance?</h3>
                <p className="text-gray-400 mb-6">
                  Get personalized WhatsApp assistance with your internship application process.
                </p>
                <button 
                  onClick={handleWhatsAppClick}
                  className="btn btn-secondary w-full bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get WhatsApp Help
                </button>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <a href="tel:+919385661495" className="text-cyan-400 hover:text-cyan-300 text-sm">
                      +91 93856 61495
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <a href="mailto:mail@softpooltech.in" className="text-cyan-400 hover:text-cyan-300 text-sm">
                      mail@softpooltech.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="font-semibold">Office Hours</span>
              </div>
              <p className="text-gray-400">
                Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                Saturday: 10:00 AM - 4:00 PM IST<br />
                Sunday: Closed
              </p>
              <p className="text-sm text-gray-500 mt-4">
                For urgent inquiries, our support team is available via WhatsApp during extended hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternshipPage;