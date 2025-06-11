import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Shield } from 'lucide-react';

const PrivacyPage: React.FC = () => {
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
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-cyan-400 mr-3" />
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-800 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Our Commitment to Privacy</h2>
              <p className="text-gray-300 mb-4">
                At Softpool Technologies, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, and safeguard 
                your information when you use our services.
              </p>
            </div>

            <div className="space-y-8">
              <section className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">1. Information We Collect</h2>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Personal Information:</h3>
                    <ul className="space-y-2 ml-4">
                      <li>• Name and contact information (email, phone number)</li>
                      <li>• Business information and requirements</li>
                      <li>• Communication preferences</li>
                      <li>• Project-related information and specifications</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Technical Information:</h3>
                    <ul className="space-y-2 ml-4">
                      <li>• Website usage data and analytics</li>
                      <li>• Device and browser information</li>
                      <li>• IP address and location data</li>
                      <li>• Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">2. How We Use Your Information</h2>
                <div className="space-y-4 text-gray-300">
                  <ul className="space-y-2">
                    <li>• To provide and improve our services</li>
                    <li>• To communicate with you about projects and services</li>
                    <li>• To send important updates and notifications</li>
                    <li>• To analyze website usage and optimize user experience</li>
                    <li>• To comply with legal obligations</li>
                    <li>• To prevent fraud and ensure security</li>
                  </ul>
                </div>
              </section>

              <section className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">3. Information Sharing</h2>
                <div className="space-y-4 text-gray-300">
                  <p><strong>We do not sell, trade, or rent your personal information to third parties.</strong></p>
                  <p>We may share your information only in the following circumstances:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• With your explicit consent</li>
                    <li>• To comply with legal requirements or court orders</li>
                    <li>• To protect our rights, property, or safety</li>
                    <li>• With trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
                    <li>• In connection with a business transfer or merger</li>
                  </ul>
                </div>
              </section>

              <section className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">4. Data Security</h2>
                <div className="space-y-4 text-gray-300">
                  <p>We implement appropriate security measures to protect your personal information:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Encryption of sensitive data in transit and at rest</li>
                    <li>• Regular security assessments and updates</li>
                    <li>• Limited access to personal information on a need-to-know basis</li>
                    <li>• Secure backup and recovery procedures</li>
                    <li>• Employee training on data protection practices</li>
                  </ul>
                </div>
              </section>

              <section className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">5. Cookies and Tracking</h2>
                <div className="space-y-4 text-gray-300">
                  <p>We use cookies and similar technologies to:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Remember your preferences and settings</li>
                    <li>• Analyze website traffic and usage patterns</li>
                    <li>• Improve website functionality and user experience</li>
                    <li>• Provide personalized content and recommendations</li>
                  </ul>
                  <p className="mt-4">
                    You can control cookie settings through your browser preferences. However, disabling 
                    cookies may affect website functionality.
                  </p>
                </div>
              </section>

              <section className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">6. Your Rights</h2>
                <div className="space-y-4 text-gray-300">
                  <p>You have the right to:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Access your personal information we hold</li>
                    <li>• Request correction of inaccurate information</li>
                    <li>• Request deletion of your personal information</li>
                    <li>• Object to processing of your information</li>
                    <li>• Request data portability</li>
                    <li>• Withdraw consent at any time</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </div>
              </section>

              <section className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">7. Data Retention</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We retain your personal information only as long as necessary to fulfill the purposes 
                    outlined in this policy, comply with legal obligations, resolve disputes, and enforce 
                    our agreements. When information is no longer needed, we securely delete or anonymize it.
                  </p>
                </div>
              </section>

              <section className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">8. Third-Party Services</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Our website may contain links to third-party services. We are not responsible for the 
                    privacy practices of these external sites. We encourage you to review their privacy 
                    policies before providing any personal information.
                  </p>
                </div>
              </section>

              <section className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">9. Children's Privacy</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Our services are not intended for children under 13 years of age. We do not knowingly 
                    collect personal information from children under 13. If we become aware that we have 
                    collected such information, we will take steps to delete it promptly.
                  </p>
                </div>
              </section>

              <section className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">10. Changes to This Policy</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any material 
                    changes by posting the new policy on our website and updating the "Last updated" date. 
                    Your continued use of our services after changes constitutes acceptance of the updated policy.
                  </p>
                </div>
              </section>
            </div>

            {/* Contact Information */}
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
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
                <div className="text-gray-300">
                  <strong>Address:</strong><br />
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
    </div>
  );
};

export default PrivacyPage;