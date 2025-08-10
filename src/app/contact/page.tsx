'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    businessNeeds: '',
    additionalDetails: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">


      {/* Main Content */}
      <div className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Back to Home Button */}
          <div className="mb-8">
            <a 
              href="/" 
              className="inline-flex items-center px-4 py-2 bg-transparent text-green-400 font-semibold rounded-lg hover:bg-green-600/10 hover:text-white transition-colors duration-300 border border-green-500"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </a>
          </div>
          
          {/* Page Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Get in Touch</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              Ready to transform your business with AI? Let's start the conversation about how we can help you work smarter and achieve more.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Contact Information</h2>
              <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                Get in touch with our AI experts to discuss your business needs and discover how our solutions can drive your success.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg flex items-center justify-center border border-green-500/30">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Email</p>
                    <p className="text-lg text-white" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>hello@arvao.ca</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg flex items-center justify-center border border-green-500/30">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Phone</p>
                    <p className="text-lg text-white" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>+1 (555) 123-4567</p>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="bg-gray-800/40 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>What to Expect</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Free 30-minute consultation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Customized AI solution assessment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Implementation roadmap</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>ROI analysis</span>
                    </div>
                  </div>
                </div>

                {/* Additional Contact Methods */}
                <div className="bg-gray-800/40 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Other Ways to Connect</h3>
                  <div className="space-y-4">
                    <a 
                      href="/consultation" 
                      className="block w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-center"
                    >
                      Book Free Consultation
                    </a>
                    <a 
                      href="/booking" 
                      className="block w-full px-6 py-3 bg-transparent text-green-400 font-semibold rounded-lg hover:bg-green-600/10 hover:text-white transition-colors duration-300 border border-green-500 text-center"
                    >
                      Schedule Consultation Time
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Start Your Journey</h2>
              <p className="text-gray-300 mb-8" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                Tell us about your business needs and we'll provide a customized AI solution consultation.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                    <input 
                      type="text" 
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company Name *</label>
                  <input 
                    type="text" 
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your Company Name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Business Needs *</label>
                  <select 
                    name="businessNeeds"
                    required
                    value={formData.businessNeeds}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select your primary need</option>
                    <option value="customer-service">Customer Service Automation</option>
                    <option value="sales-support">Sales & Support</option>
                    <option value="appointment-booking">Appointment Booking</option>
                    <option value="order-management">Order Management</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Additional Details</label>
                  <textarea 
                    name="additionalDetails"
                    rows={4}
                    value={formData.additionalDetails}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    placeholder="Tell us more about your specific requirements, challenges, and goals..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800/50 border-t border-gray-700/50 py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <span className="text-2xl font-bold text-white font-mono">Arvado</span>
            <p className="text-gray-400 mt-4">Transforming businesses with intelligent AI solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
