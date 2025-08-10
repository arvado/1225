'use client';

import React, { useState } from 'react';

export default function ConsultationPage() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    businessNeeds: '',
    additionalDetails: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowThankYou(true);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (showThankYou) {
    return (
      <div className="min-h-screen bg-gray-900 relative overflow-hidden">


        {/* OCR-A Code Rain Background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-screen overflow-hidden pointer-events-none">
            <div className="relative h-full">
              {Array.from({ length: 12 }, (_, column) => (
                <div 
                  key={column}
                  className="absolute top-0 text-green-400 text-xs opacity-20 animate-fall"
                  style={{ 
                    left: `${(column * 8.33) + 1}%`,
                    animationDelay: `${column * 0.4}s`,
                    animationDuration: `${10 + column * 0.3}s`,
                    fontFamily: 'OCR-A, monospace'
                  }}
                >
                  {Array.from({ length: 20 }, (_, row) => {
                    const chars = '01‰%&permil;&percnt;&#8240;&#37;';
                    const charIndex = (column + row) % chars.length;
                    return (
                      <div 
                        key={row} 
                        className="mb-2 opacity-50"
                        style={{ 
                          animationDelay: `${row * 0.15}s`,
                          fontSize: `${10 + (row % 6)}px`
                        }}
                      >
                        {chars[charIndex]}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Thank You Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="mb-6">
              <h1 className="text-5xl font-bold text-green-400 mb-3" style={{ fontFamily: 'OCR-A, monospace' }}>THANK YOU!</h1>
              <p className="text-xl text-white mb-4" style={{ fontFamily: 'OCR-A, monospace' }}>WE WILL GET BACK TO YOU AS SOON AS POSSIBLE</p>
            </div>
            
            <div className="mb-8">
              {/* Ultra-sleek checkmark design */}
              <div className="w-20 h-20 bg-transparent rounded-full mx-auto mb-4 flex items-center justify-center relative">
                {/* Minimal inner circle */}
                <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-sm">
                  {/* Clean checkmark */}
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>

            <a 
              href="/" 
              className="inline-flex items-center px-6 py-3 text-green-400 font-semibold rounded-lg hover:text-white transition-colors duration-300 hover:bg-green-400/10"
              style={{ fontFamily: 'OCR-A, monospace' }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              BACK TO HOME
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* OCR-A Code Rain Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-screen overflow-hidden pointer-events-none">
          <div className="relative h-full">
            {Array.from({ length: 12 }, (_, column) => (
              <div 
                key={column}
                className="absolute top-0 text-green-400 text-xs opacity-20 animate-fall"
                style={{ 
                  left: `${(column * 8.33) + 1}%`,
                  animationDelay: `${column * 0.4}s`,
                  animationDuration: `${10 + column * 0.3}s`,
                  fontFamily: 'OCR-A, monospace'
                }}
              >
                {Array.from({ length: 20 }, (_, row) => {
                  const chars = '01‰%&permil;&percnt;&#8240;&#37;';
                  const charIndex = (column + row) % chars.length;
                  return (
                    <div 
                      key={row} 
                      className="mb-2 opacity-50"
                      style={{ 
                        animationDelay: `${row * 0.15}s`,
                        fontSize: `${10 + (row % 6)}px`
                      }}
                    >
                      {chars[charIndex]}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="py-12 px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Back to Home Button */}
            <div className="mb-6">
              <a 
                href="/" 
                className="inline-flex items-center px-3 py-2 bg-transparent text-green-400 font-semibold rounded-lg hover:bg-green-600/10 hover:text-white transition-colors duration-300 border border-green-500/30 text-sm"
                style={{ fontFamily: 'OCR-A, monospace' }}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                BACK TO HOME
              </a>
            </div>
            
            {/* Page Header */}
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'OCR-A, monospace' }}>FREE AI SOLUTION CONSULTATION</h1>
              <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'OCR-A, monospace' }}>
                READY TO TRANSFORM YOUR BUSINESS WITH AI? LET'S START THE CONVERSATION ABOUT HOW WE CAN HELP YOU WORK SMARTER AND ACHIEVE MORE.
              </p>
            </div>

            {/* Contact & Consultation Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'OCR-A, monospace' }}>CONTACT INFORMATION</h2>
                <p className="text-sm text-gray-300 leading-relaxed" style={{ fontFamily: 'OCR-A, monospace' }}>
                  GET IN TOUCH WITH OUR AI EXPERTS TO DISCUSS YOUR BUSINESS NEEDS AND DISCOVER HOW OUR SOLUTIONS CAN DRIVE YOUR SUCCESS.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg flex items-center justify-center border border-green-500/30">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400" style={{ fontFamily: 'OCR-A, monospace' }}>EMAIL</p>
                      <p className="text-sm text-white" style={{ fontFamily: 'OCR-A, monospace' }}>ARVADO@GMAIL.COM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg flex items-center justify-center border border-green-500/30">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400" style={{ fontFamily: 'OCR-A, monospace' }}>PHONE</p>
                      <p className="text-sm text-white" style={{ fontFamily: 'OCR-A, monospace' }}>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  

                </div>
              </div>

              {/* Consultation Form */}
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-lg p-5">
                <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'OCR-A, monospace' }}>SCHEDULE YOUR CONSULTATION</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1" style={{ fontFamily: 'OCR-A, monospace' }}>FIRST NAME *</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                        placeholder="Enter your first name"
                        style={{ fontFamily: 'OCR-A, monospace' }}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1" style={{ fontFamily: 'OCR-A, monospace' }}>LAST NAME *</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                        placeholder="Enter your last name"
                        style={{ fontFamily: 'OCR-A, monospace' }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1" style={{ fontFamily: 'OCR-A, monospace' }}>COMPANY EMAIL *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      placeholder="your@company.com"
                      style={{ fontFamily: 'OCR-A, monospace' }}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1" style={{ fontFamily: 'OCR-A, monospace' }}>COMPANY NAME *</label>
                    <input 
                      type="text" 
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      placeholder="Your Company Name"
                      style={{ fontFamily: 'OCR-A, monospace' }}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1" style={{ fontFamily: 'OCR-A, monospace' }}>BUSINESS NEEDS *</label>
                    <select 
                      name="businessNeeds"
                      value={formData.businessNeeds}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      style={{ fontFamily: 'OCR-A, monospace' }}
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
                    <label className="block text-xs font-medium text-gray-300 mb-1" style={{ fontFamily: 'OCR-A, monospace' }}>ADDITIONAL DETAILS</label>
                    <textarea 
                      name="additionalDetails"
                      value={formData.additionalDetails}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-sm"
                      placeholder="Tell us more about your specific requirements, challenges, and goals..."
                      style={{ fontFamily: 'OCR-A, monospace' }}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-transparent border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 hover:text-white transition-all duration-300 transform hover:scale-105 mb-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'OCR-A, monospace' }}
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'SCHEDULE FREE CONSULTATION'}
                  </button>
                  

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800/50 border-t border-gray-700/50 py-10">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <span className="text-xl font-bold text-white font-mono" style={{ fontFamily: 'OCR-A, monospace' }}>ARVADO</span>
            <p className="text-gray-400 mt-3 text-sm" style={{ fontFamily: 'OCR-A, monospace' }}>TRANSFORMING BUSINESSES WITH INTELLIGENT AI SOLUTIONS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
