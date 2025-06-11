import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone } from 'lucide-react';

const TermsPage: React.FC = () => {
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
            <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-800 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Agreement to Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using the services provided by Softpool Technologies ("we," "our," or "us"), 
                you agree to be bound by these Terms & Conditions. If you do not agree to these terms, 
                please do not use our services.
              </p>
            </div>

            <div className="space-y-8">
              <section className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">1. Service Agreement</h2>
                <ul className="space-y-2 text-gray-300">
                  <li>• By using our services, you agree to these policies and terms</li>
                  <li>• We reserve the right to deny service to anyone at our discretion</li>
                  <li>• All services are subject to availability and our technical capabilities</li>
                  <li>• Service specifications will be outlined in separate project agreements</li>
                </ul>
              </section>

              <section className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">2. Refund Policy</h2>
                <div className="space-y-4 text-gray-300">
                  <p><strong>Refund Eligibility:</strong></p>
                  <ul className="space-y-2 ml-4">
                    <li>• Refunds will only be issued if there is a verified technical or service failure on our part</li>
                    <li>• No refunds will be provided for change of mind, user error, or circumstances outside our control</li>
                    <li>• All approved refunds will be processed within 5-7 business days</li>
                    <li>• Refund requests must be submitted in writing to <a href="mailto:mail@softpooltech.in" className="text-cyan-400">mail@softpooltech.in</a> within 48 hours of the incident</li>
                  </ul>
                </div>
              </section>

              <section className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">3. Cancellation Policy</h2>
                <div className="space-y-4 text-gray-300">
                  <ul className="space-y-2">
                    <li>• Cancellations must be requested at least 24 hours before the scheduled service</li>
                    <li>• No refunds will be provided for late cancellations or no-shows</li>
                    <li>• Cancellation requests must be submitted through email to <a href="mailto:mail@softpooltech.in" className="text-cyan-400">mail@softpooltech.in</a></li>
                    <li>• Emergency cancellations will be reviewed on a case-by-case basis</li>
                  </ul>
                </div>
              </section>

              <section className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">4. Service Quality & Reporting</h2>
                <div className="space-y-4 text-gray-300">
                  <ul className="space-y-2">
                    <li>• Service quality issues must be reported within 24 hours of service completion</li>
                    <li>• We commit to addressing legitimate quality concerns promptly</li>
                    <li>• All communications regarding service issues should be documented in writing</li>
                  </ul>
                </div>
              </section>

              <section className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">5. Modifications to Terms</h2>
                <p className="text-gray-300">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately 
                  upon posting on our website. Continued use of our services after changes constitutes acceptance 
                  of the new terms.
                </p>
              </section>

              <section className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">6. Governing Law</h2>
                <p className="text-gray-300">
                  These terms and conditions are governed by the laws of India. All disputes will be resolved 
                  according to Indian law and under the jurisdiction of Chennai, Tamil Nadu courts.
                </p>
              </section>

              <section className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">7. Intellectual Property</h2>
                <div className="space-y-4 text-gray-300">
                  <ul className="space-y-2">
                    <li>• All work products created by Softpool Technologies remain our intellectual property until full payment is received</li>
                    <li>• Upon full payment, ownership rights transfer to the client as specified in the project agreement</li>
                    <li>• We retain the right to showcase completed work in our portfolio unless otherwise agreed</li>
                  </ul>
                </div>
              </section>

              <section className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">8. Limitation of Liability</h2>
                <p className="text-gray-300">
                  Softpool Technologies shall not be liable for any indirect, incidental, special, or consequential 
                  damages arising from the use of our services. Our total liability shall not exceed the amount 
                  paid for the specific service in question.
                </p>
              </section>
            </div>

            {/* Contact Information */}
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Contact Information</h2>
              <p className="text-gray-300 mb-6">
                For any questions regarding these Terms & Conditions, please contact our customer service team:
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;