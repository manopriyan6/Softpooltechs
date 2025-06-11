import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, CreditCard, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

const RefundPage: React.FC = () => {
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
              <CreditCard className="w-8 h-8 text-cyan-400 mr-3" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Refund & Cancellation Policy</h1>
            <div className="flex items-center justify-center text-gray-400">
              <Clock className="w-4 h-4 mr-2" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-red-400 mb-2">Important Notice</h2>
                <p className="text-gray-300">
                  Please read this policy carefully before making any payments. By proceeding with payment, 
                  you acknowledge that you have read, understood, and agree to these terms.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* No Cancellation Policy */}
            <section className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-400 mr-3" />
                <h2 className="text-2xl font-bold text-orange-400">No Cancellation After Payment</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                  <p className="font-semibold text-orange-400 mb-2">
                    Orders cannot be cancelled once payment has been processed.
                  </p>
                  <p>
                    This policy ensures we can allocate resources and begin work on your project immediately. 
                    We encourage you to carefully review all project details before making payment.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Why This Policy Exists:</h3>
                  <ul className="space-y-2 ml-4">
                    <li>• We immediately allocate team resources upon payment confirmation</li>
                    <li>• Project planning and initial work begins within 24 hours</li>
                    <li>• This ensures faster project delivery and dedicated attention</li>
                    <li>• It allows us to maintain competitive pricing</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Refund Conditions */}
            <section className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <CreditCard className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-cyan-400">When Refunds May Be Considered</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p className="text-cyan-400 font-semibold">
                  Refunds are only available in very specific circumstances:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <h3 className="font-semibold text-green-400">Eligible for Refund</h3>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li>• Verified technical failure on our part</li>
                      <li>• We cannot deliver the agreed service</li>
                      <li>• Significant service quality issues (verified)</li>
                      <li>• Breach of contract by Softpool Technologies</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
                      <h3 className="font-semibold text-red-400">Not Eligible for Refund</h3>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li>• Change of mind or business direction</li>
                      <li>• User error or miscommunication</li>
                      <li>• External circumstances beyond our control</li>
                      <li>• Dissatisfaction with design preferences</li>
                      <li>• Delays caused by client-side issues</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Exceptions to No-Cancellation Policy */}
            <section className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-lime-400 mr-3" />
                <h2 className="text-2xl font-bold text-lime-400">Limited Exceptions</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>In very rare circumstances, we may consider cancellations:</p>
                <div className="bg-lime-500/10 border border-lime-500/20 rounded-lg p-4">
                  <ul className="space-y-2">
                    <li>• <strong>Medical emergencies:</strong> Documented medical emergencies affecting the business owner</li>
                    <li>• <strong>Force majeure events:</strong> Natural disasters, government actions, or other unforeseeable events</li>
                    <li>• <strong>Business closure:</strong> Documented permanent business closure due to unforeseen circumstances</li>
                  </ul>
                  <p className="mt-4 text-sm text-lime-400">
                    <strong>Note:</strong> These exceptions require proper documentation and are reviewed case-by-case. 
                    Partial refunds may apply based on work already completed.
                  </p>
                </div>
              </div>
            </section>

            {/* Refund Request Process */}
            <section className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-cyan-400">How to Request a Refund</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                  <h3 className="font-semibold text-cyan-400 mb-2">Step-by-Step Process:</h3>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li><strong>Contact us immediately:</strong> Email us at <a href="mailto:mail@softpooltech.in" className="text-cyan-400 underline">mail@softpooltech.in</a></li>
                    <li><strong>Provide details:</strong> Include your order number, payment details, and reason for refund</li>
                    <li><strong>Submit within 48 hours:</strong> Refund requests must be made within 48 hours of the issue</li>
                    <li><strong>Provide documentation:</strong> Include any relevant screenshots, communications, or evidence</li>
                    <li><strong>Wait for review:</strong> We'll review your request within 2-3 business days</li>
                    <li><strong>Receive decision:</strong> You'll get a written response with our decision and next steps</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Required Information:</h3>
                  <ul className="space-y-1 ml-4">
                    <li>• Full name and contact information</li>
                    <li>• Order/Invoice number</li>
                    <li>• Payment transaction details</li>
                    <li>• Detailed explanation of the issue</li>
                    <li>• Supporting documentation (if applicable)</li>
                    <li>• Preferred refund method</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Refund Timeline */}
            <section className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-lime-400 mr-3" />
                <h2 className="text-2xl font-bold text-lime-400">Refund Processing Timeline</h2>
              </div>
              <div className="text-gray-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-lime-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-lime-400">1</span>
                    </div>
                    <h3 className="font-semibold mb-2">Review Period</h3>
                    <p className="text-sm">2-3 business days to review your request</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-lime-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-lime-400">2</span>
                    </div>
                    <h3 className="font-semibold mb-2">Decision</h3>
                    <p className="text-sm">Written response with approval or denial</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-lime-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-lime-400">3</span>
                    </div>
                    <h3 className="font-semibold mb-2">Processing</h3>
                    <p className="text-sm">5-7 business days for approved refunds</p>
                  </div>
                </div>
                <div className="mt-6 bg-lime-500/10 border border-lime-500/20 rounded-lg p-4">
                  <p className="text-sm">
                    <strong>Total Timeline:</strong> Approved refunds are typically processed within 7-10 business days 
                    from the initial request. Refund method will be the same as the original payment method when possible.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-r from-cyan-500/10 to-lime-500/10 border border-cyan-500/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Refund-Related Inquiries</h2>
              <p className="text-gray-300 mb-6 text-center">
                Have questions about our refund policy? Need to submit a refund request? Contact us using the information below.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="font-semibold">Email (Preferred)</p>
                      <a href="mailto:mail@softpooltech.in" className="text-cyan-400 hover:text-cyan-300">
                        mail@softpooltech.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+919385661495" className="text-cyan-400 hover:text-cyan-300">
                        +91 93856 61495
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-gray-300">
                  <p className="font-semibold mb-2">Business Hours:</p>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                  <p>Sunday: Closed</p>
                  <p className="text-sm mt-2 text-gray-400">
                    Emergency refund requests will be reviewed within 24 hours, even outside business hours.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPage;