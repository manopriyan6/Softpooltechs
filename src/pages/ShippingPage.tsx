import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Truck, Clock, MapPin, Package, CheckCircle, AlertTriangle, Globe } from 'lucide-react';

const ShippingPage: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const deliveryMethods = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Digital Delivery",
      description: "Instant delivery for digital products and services",
      timeline: "Immediate to 24 hours",
      cost: "Free",
      details: [
        "Website files and source code",
        "Digital marketing assets",
        "Software applications",
        "Documentation and guides",
        "Login credentials and access"
      ]
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Physical Materials",
      description: "Printed materials, branded items, and hardware",
      timeline: "3-7 business days",
      cost: "Varies by location",
      details: [
        "Printed marketing materials",
        "Branded merchandise",
        "Hardware components",
        "Documentation packages",
        "Training materials"
      ]
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "On-site Services",
      description: "Direct service delivery at your location",
      timeline: "Scheduled appointment",
      cost: "Travel charges may apply",
      details: [
        "Installation services",
        "Training sessions",
        "Consultation meetings",
        "System setup",
        "Technical support"
      ]
    }
  ];

  const shippingZones = [
    {
      zone: "Local (Chennai & Surrounding Areas)",
      timeline: "Same day to 2 business days",
      cost: "₹50 - ₹200",
      description: "Fast local delivery within Chennai metropolitan area"
    },
    {
      zone: "Tamil Nadu",
      timeline: "1-3 business days",
      cost: "₹100 - ₹300",
      description: "State-wide delivery across Tamil Nadu"
    },
    {
      zone: "South India",
      timeline: "2-4 business days",
      cost: "₹150 - ₹400",
      description: "Karnataka, Kerala, Andhra Pradesh, Telangana"
    },
    {
      zone: "Pan India",
      timeline: "3-7 business days",
      cost: "₹200 - ₹600",
      description: "All major cities and towns across India"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <Link 
            to="/" 
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center mb-4">
              <Truck className="w-8 h-8 text-cyan-400 mr-3" />
              <Package className="w-8 h-8 text-lime-400" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Shipping & Delivery</h1>
            <div className="flex items-center justify-center text-gray-400">
              <Clock className="w-4 h-4 mr-2" />
              <span>Last updated: {lastUpdated}</span>
            </div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Learn about our delivery methods, shipping zones, and timelines for both digital and physical products.
            </p>
          </div>

          {/* Service Notice */}
          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-cyan-400 mb-2">Service-Based Business</h2>
                <p className="text-gray-300">
                  As a technology services company, most of our deliverables are digital. Physical shipping 
                  applies only to specific items like printed materials, branded merchandise, or hardware components 
                  when included in your service package.
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Methods */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Delivery Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {deliveryMethods.map((method, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-800/80 transition-colors">
                  <div className="bg-cyan-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-cyan-400">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-cyan-400">{method.title}</h3>
                  <p className="text-gray-300 mb-4">{method.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Timeline:</span>
                      <span className="text-lime-400 font-semibold">{method.timeline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Cost:</span>
                      <span className="text-lime-400 font-semibold">{method.cost}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-300">Includes:</h4>
                    <ul className="space-y-1">
                      {method.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Digital Delivery Process */}
          <section className="mb-16">
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Globe className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-cyan-400">Digital Delivery Process</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Project Completion</h3>
                  <p className="text-sm text-gray-400">Final testing and quality assurance</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Client Review</h3>
                  <p className="text-sm text-gray-400">Presentation and feedback collection</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Final Approval</h3>
                  <p className="text-sm text-gray-400">Client sign-off and payment</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                    4
                  </div>
                  <h3 className="font-semibold mb-2">Delivery</h3>
                  <p className="text-sm text-gray-400">Secure transfer of all assets</p>
                </div>
              </div>

              <div className="mt-8 bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                <h4 className="font-semibold text-cyan-400 mb-2">Digital Delivery Includes:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <ul className="space-y-1">
                    <li>• Complete source code and files</li>
                    <li>• Documentation and user guides</li>
                    <li>• Login credentials and access details</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>• Deployment instructions</li>
                    <li>• Backup files and versions</li>
                    <li>• Support contact information</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Physical Shipping Zones */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Physical Shipping Zones</h2>
            <div className="space-y-6">
              {shippingZones.map((zone, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-800/80 transition-colors">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="font-bold text-cyan-400 mb-1">{zone.zone}</h3>
                      <p className="text-sm text-gray-400">{zone.description}</p>
                    </div>
                    <div className="text-center">
                      <div className="text-lime-400 font-semibold">{zone.timeline}</div>
                      <div className="text-xs text-gray-400">Delivery Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-orange-400 font-semibold">{zone.cost}</div>
                      <div className="text-xs text-gray-400">Shipping Cost</div>
                    </div>
                    <div className="flex justify-center">
                      <MapPin className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-orange-400 font-semibold mb-1">Shipping Cost Note:</p>
                  <p className="text-gray-300">
                    Shipping costs are estimates and may vary based on package size, weight, and exact delivery location. 
                    Final shipping charges will be communicated before dispatch.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Delivery Terms */}
          <section className="mb-16">
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-lime-400">Delivery Terms & Conditions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-cyan-400">Digital Deliveries</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Delivered via secure email or cloud storage</li>
                    <li>• Access provided within 24 hours of final payment</li>
                    <li>• Backup copies maintained for 30 days</li>
                    <li>• Technical support included for 7 days post-delivery</li>
                    <li>• Re-delivery available if files are corrupted</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-cyan-400">Physical Shipments</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Tracking information provided for all shipments</li>
                    <li>• Insurance included for high-value items</li>
                    <li>• Signature required for delivery confirmation</li>
                    <li>• Replacement provided for damaged items</li>
                    <li>• Address changes accepted up to 24 hours before dispatch</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <h4 className="font-semibold text-red-400 mb-2">Important Notes:</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Delivery timelines exclude weekends and public holidays</li>
                  <li>• Remote locations may require additional 1-2 business days</li>
                  <li>• Customer responsible for providing accurate delivery information</li>
                  <li>• Failed delivery attempts may incur additional charges</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tracking & Support */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-cyan-500/10 to-lime-500/10 border border-cyan-500/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Delivery Support</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-cyan-400">Track Your Delivery</h3>
                  <p className="text-gray-300 mb-4">
                    Stay updated on your delivery status through multiple channels:
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Email notifications at each delivery milestone</li>
                    <li>• WhatsApp updates for real-time tracking</li>
                    <li>• Phone support for urgent delivery queries</li>
                    <li>• Online portal access for digital deliveries</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-lime-400">Need Help?</h3>
                  <p className="text-gray-300 mb-4">
                    Our delivery support team is here to assist you:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <a href="mailto:mail@softpooltech.in" className="text-cyan-400 hover:text-cyan-300 text-sm">
                        mail@softpooltech.in
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <a href="tel:+919385661495" className="text-cyan-400 hover:text-cyan-300 text-sm">
                        +91 93856 61495
                      </a>
                    </div>
                    <div className="text-gray-400 text-sm">
                      <strong>Support Hours:</strong><br />
                      Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                      Saturday: 10:00 AM - 4:00 PM IST
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact for Custom Delivery */}
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Custom Delivery Requirements?</h2>
            <p className="text-gray-300 mb-6">
              Have special delivery needs or questions about our shipping policies? 
              Contact our team for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary">
                Contact Support
              </Link>
              <a 
                href="mailto:mail@softpooltech.in" 
                className="btn btn-outline"
              >
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;