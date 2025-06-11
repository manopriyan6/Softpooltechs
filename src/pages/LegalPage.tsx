import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Shield, FileText, Calendar } from 'lucide-react';

const LegalPage: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

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
              <Shield className="w-8 h-8 text-cyan-400 mr-3" />
              <FileText className="w-8 h-8 text-lime-400 mr-3" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy & Terms of Service</h1>
            <div className="flex items-center justify-center text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-cyan-400">Quick Navigation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-lime-400 mb-2">Privacy Policy</h3>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li><a href="#data-collection" className="hover:text-cyan-400">Data Collection</a></li>
                  <li><a href="#data-usage" className="hover:text-cyan-400">How We Use Data</a></li>
                  <li><a href="#data-sharing" className="hover:text-cyan-400">Data Sharing</a></li>
                  <li><a href="#your-rights" className="hover:text-cyan-400">Your Rights</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lime-400 mb-2">Terms of Service</h3>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li><a href="#service-agreement" className="hover:text-cyan-400">Service Agreement</a></li>
                  <li><a href="#user-obligations" className="hover:text-cyan-400">User Obligations</a></li>
                  <li><a href="#prohibited-activities" className="hover:text-cyan-400">Prohibited Activities</a></li>
                  <li><a href="#liability-limitations" className="hover:text-cyan-400">Liability & Disputes</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* PRIVACY POLICY SECTION */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Shield className="w-6 h-6 text-cyan-400 mr-3" />
              <h2 className="text-3xl font-bold text-cyan-400">Privacy Policy</h2>
            </div>

            <div className="space-y-8">
              <section className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Our Privacy Commitment</h3>
                <p className="text-gray-300">
                  At Softpool Technologies, we respect your privacy and are committed to protecting your personal information. 
                  This policy explains in simple terms how we collect, use, and protect your data when you use our services.
                </p>
              </section>

              <section id="data-collection" className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">What Information We Collect</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold mb-2">Information You Give Us:</h4>
                    <ul className="space-y-1 ml-4">
                      <li>• Your name, email address, and phone number</li>
                      <li>• Business information and project requirements</li>
                      <li>• Messages and communications with us</li>
                      <li>• Payment and billing information</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Information We Collect Automatically:</h4>
                    <ul className="space-y-1 ml-4">
                      <li>• How you use our website (pages visited, time spent)</li>
                      <li>• Your device and browser information</li>
                      <li>• Your IP address and general location</li>
                      <li>• Cookies and similar tracking data</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="data-usage" className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">How We Use Your Information</h3>
                <div className="text-gray-300">
                  <p className="mb-4">We use your information to:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Provide our services and complete your projects</li>
                    <li>• Communicate with you about your projects and our services</li>
                    <li>• Send important updates and notifications</li>
                    <li>• Improve our website and services</li>
                    <li>• Process payments and manage billing</li>
                    <li>• Comply with legal requirements</li>
                    <li>• Prevent fraud and ensure security</li>
                  </ul>
                </div>
              </section>

              <section id="data-sharing" className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">When We Share Your Information</h3>
                <div className="text-gray-300">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-4">
                    <p className="font-semibold text-red-400">We never sell your personal information to anyone.</p>
                  </div>
                  <p className="mb-4">We only share your information when:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• You give us permission to do so</li>
                    <li>• We need to comply with the law or legal requests</li>
                    <li>• We work with trusted partners who help us provide services (they must keep your information confidential)</li>
                    <li>• We need to protect our rights or prevent fraud</li>
                    <li>• Our business is sold or merged (you'll be notified)</li>
                  </ul>
                </div>
              </section>

              <section className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">How We Protect Your Information</h3>
                <div className="text-gray-300">
                  <p className="mb-4">We use industry-standard security measures:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Encrypted data transmission and storage</li>
                    <li>• Regular security updates and monitoring</li>
                    <li>• Limited access to your information (only authorized staff)</li>
                    <li>• Secure backup systems</li>
                    <li>• Staff training on data protection</li>
                  </ul>
                </div>
              </section>

              <section id="your-rights" className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Your Privacy Rights</h3>
                <div className="text-gray-300">
                  <p className="mb-4">You have the right to:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• See what personal information we have about you</li>
                    <li>• Ask us to correct wrong information</li>
                    <li>• Request that we delete your information</li>
                    <li>• Object to how we use your information</li>
                    <li>• Get a copy of your information</li>
                    <li>• Withdraw your consent at any time</li>
                  </ul>
                  <p className="mt-4 text-cyan-400">
                    To exercise these rights, contact us at <a href="mailto:mail@softpooltech.in" className="underline">mail@softpooltech.in</a>
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* TERMS OF SERVICE SECTION */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <FileText className="w-6 h-6 text-lime-400 mr-3" />
              <h2 className="text-3xl font-bold text-lime-400">Terms of Service</h2>
            </div>

            <div className="space-y-8">
              <section className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-lime-400">Agreement to Terms</h3>
                <p className="text-gray-300">
                  By using Softpool Technologies' services, you agree to follow these terms. If you don't agree, 
                  please don't use our services. These terms help ensure a good experience for everyone.
                </p>
              </section>

              <section id="service-agreement" className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-lime-400">Our Service Agreement</h3>
                <div className="text-gray-300">
                  <ul className="space-y-2">
                    <li>• We provide web development, IT solutions, and digital marketing services</li>
                    <li>• All services are subject to availability and our capabilities</li>
                    <li>• Project details will be outlined in separate agreements</li>
                    <li>• We reserve the right to refuse service if necessary</li>
                    <li>• Service quality and timelines will be specified for each project</li>
                  </ul>
                </div>
              </section>

              <section id="user-obligations" className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-lime-400">Your Responsibilities</h3>
                <div className="text-gray-300">
                  <p className="mb-4">When using our services, you agree to:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Provide accurate and complete information</li>
                    <li>• Pay for services as agreed</li>
                    <li>• Respond to our communications in a timely manner</li>
                    <li>• Provide necessary materials and access for project completion</li>
                    <li>• Respect our staff and maintain professional communication</li>
                    <li>• Follow any specific requirements outlined in your project agreement</li>
                  </ul>
                </div>
              </section>

              <section id="prohibited-activities" className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-lime-400">What You Cannot Do</h3>
                <div className="text-gray-300">
                  <p className="mb-4">You may not:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Use our services for illegal activities</li>
                    <li>• Share your account access with others</li>
                    <li>• Attempt to hack or disrupt our systems</li>
                    <li>• Copy or steal our work or intellectual property</li>
                    <li>• Harass or abuse our staff</li>
                    <li>• Use our services to spam or send unwanted messages</li>
                    <li>• Violate any applicable laws or regulations</li>
                  </ul>
                </div>
              </section>

              <section className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-lime-400">Intellectual Property</h3>
                <div className="text-gray-300">
                  <ul className="space-y-2">
                    <li>• Work we create for you becomes yours after full payment</li>
                    <li>• Until payment is complete, we own the work</li>
                    <li>• We may showcase completed work in our portfolio unless you object</li>
                    <li>• You must respect copyrights and trademarks in your projects</li>
                    <li>• Any pre-existing materials you provide remain your property</li>
                  </ul>
                </div>
              </section>

              <section id="liability-limitations" className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-lime-400">Liability Limitations & Dispute Resolution</h3>
                <div className="text-gray-300 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Our Liability Limits:</h4>
                    <ul className="space-y-2 ml-4">
                      <li>• We're not responsible for indirect damages or lost profits</li>
                      <li>• Our total liability is limited to the amount you paid for the specific service</li>
                      <li>• We're not liable for issues caused by third-party services or your actions</li>
                      <li>• We provide services "as is" without guarantees of specific outcomes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Resolving Disputes:</h4>
                    <ul className="space-y-2 ml-4">
                      <li>• We prefer to resolve issues through direct communication</li>
                      <li>• Contact us immediately if you have concerns</li>
                      <li>• If needed, disputes will be resolved under Indian law</li>
                      <li>• Chennai, Tamil Nadu courts have jurisdiction</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-lime-400">Changes to These Terms</h3>
                <p className="text-gray-300">
                  We may update these terms occasionally. When we do, we'll post the new version on our website 
                  and update the date at the top. Continuing to use our services means you accept the new terms.
                </p>
              </section>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-lime-500/10 border border-cyan-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Questions About These Policies?</h2>
            <p className="text-gray-300 mb-6 text-center">
              We're here to help! Contact us if you have any questions about our Privacy Policy or Terms of Service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:mail@softpooltech.in" className="text-cyan-400 hover:text-cyan-300">
                    mail@softpooltech.in
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href="tel:+919385661495" className="text-cyan-400 hover:text-cyan-300">
                    +91 93856 61495
                  </a>
                </div>
              </div>
              <div className="text-gray-300">
                <strong>Our Office:</strong><br />
                No:1/222 Softpool Technologies<br />
                Rajaji Salai, Pudupakkam<br />
                inside Lakshya Gardens<br />
                Kelambakkam, Chennai, Tamil Nadu 603103
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;