import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Clock, Send, Linkedin } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  acceptPrivacy: boolean;
  acceptTerms: boolean;
}

const ContactPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!data.acceptPrivacy || !data.acceptTerms) {
      setSubmitStatus({
        type: 'error',
        message: 'Please accept the Privacy Policy and Terms & Conditions to proceed.',
      });
      setIsSubmitting(false);
      return;
    }

    const timestamp = new Date().toLocaleString();
    const whatsappMessage = encodeURIComponent(`
New Contact Form Submission
--------------------------
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}
Message: ${data.message}
Submitted: ${timestamp}
    `.trim());

    try {
      // Redirect to WhatsApp
      window.location.href = `https://wa.me/919385661495?text=${whatsappMessage}`;
      
      setSubmitStatus({
        type: 'success',
        message: 'Redirecting to WhatsApp...',
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to process your request. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "No:1/222 Softpool Technologies, Rajaji Salai, Pudupakkam, inside Lakshya Gardens, Kelambakkam, Chennai, Tamil Nadu 603103"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+91 9385661495"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "mail@softpooltech.in"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Have a project in mind? Let's discuss how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="flex justify-center text-cyan-400 mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <p className="text-gray-400">{info.content}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              {submitStatus && (
                <div className={`p-4 rounded-lg mb-6 ${
                  submitStatus.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">{errors.name.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    {...register("subject", { required: "Subject is required" })}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500"
                    disabled={isSubmitting}
                  />
                  {errors.subject && (
                    <span className="text-red-500 text-sm">{errors.subject.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register("message", { required: "Message is required" })}
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500"
                    disabled={isSubmitting}
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-500 text-sm">{errors.message.message}</span>
                  )}
                </div>

                {/* Privacy Policy and Terms Checkboxes */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      {...register("acceptPrivacy", { required: true })}
                      className="mt-1 mr-2"
                      disabled={isSubmitting}
                    />
                    <label className="text-sm text-gray-300">
                      I have read and accept the{" "}
                      <a
                        href="/legal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300"
                      >
                        Privacy Policy
                      </a>
                      {errors.acceptPrivacy && (
                        <span className="block text-red-500">Please accept the Privacy Policy</span>
                      )}
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      {...register("acceptTerms", { required: true })}
                      className="mt-1 mr-2"
                      disabled={isSubmitting}
                    />
                    <label className="text-sm text-gray-300">
                      I agree to the{" "}
                      <a
                        href="/legal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300"
                      >
                        Terms & Conditions
                      </a>
                      {errors.acceptTerms && (
                        <span className="block text-red-500">Please accept the Terms & Conditions</span>
                      )}
                    </label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Processing...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/company/softpool-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;