'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden font-mono">
      {/* Enhanced Cooler Background Pattern */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%2310b981' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-emerald-900/20 to-teal-900/30" />
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-900/20 via-transparent to-pink-900/20" />
      </div>

      {/* Floating Tech Elements - OCR-A Code Rain */}
      <div className="fixed inset-0 pointer-events-none">
        {/* OCR-A Code Rain Effect */}
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


        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative py-32 px-6 sm:px-8 lg:px-12 min-h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="max-w-7xl mx-auto text-center px-6 relative z-20">
            {/* Sophisticated Arvado Title */}
            <div className="mb-16 relative">
              {/* Main Title - Clean & Sophisticated */}
              <div className="relative z-10">
                <div 
                  className="text-6xl md:text-7xl font-bold text-green-400 mb-6 leading-tight tracking-wide relative"
                  style={{ fontFamily: 'Helvetica, Arial, sans-serif', textShadow: '0 0 15px rgba(34, 197, 94, 0.3)' }}
                >
                  {/* Subtle Text Shadow for Depth */}
                  <div className="absolute inset-0 text-gray-800 opacity-30 transform translate-x-1 translate-y-1"></div>
                  
                  Arvado
                </div>
              </div>
            </div>


            
            <p 
              className="text-sm text-white mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              <span className="text-xl md:text-2xl font-bold text-green-400 mb-8 block leading-tight" style={{ textShadow: '0 0 15px rgba(34, 197, 94, 0.3)' }}>
                We design AI that helps you work smarter, achieve more, and focus on what you do best.
              </span>
              <span className="text-sm text-gray-300">
                We offer AI solutions built for any industry or niche—handling everything from customer calls and sales to specialized support and operations.
              </span>
            </p>


          </div>
        </section>

        {/* Free Consultations Section */}
        <section id="features" className="py-20 px-6 sm:px-8 lg:px-12 bg-gray-800/20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-medium text-center text-white mb-12">Free Consultations</h2>
            
            {/* Main Bio */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-base text-gray-300 leading-relaxed">
                Our free consultations are a vital first step because we take the time to understand your business inside and out. We sit down with you to map out a clear blueprint, identifying challenges and uncovering opportunities for improvement. From there, we design tailored AI solutions—no matter how niche—that directly address your needs, streamline your processes, and help your business run smarter and more efficiently.
              </p>
            </div>

            {/* Consultation Buttons - Above the Process Cards */}
            <div className="text-center mb-16">
              <div className="flex justify-center items-center">
                <a 
                  href="/consultation" 
                  className="px-8 py-4 bg-transparent text-green-400 font-medium rounded-lg hover:bg-green-600/20 hover:text-white transition-all duration-300 border border-green-500/50 hover:border-green-400 text-base cursor-pointer"
                  role="button"
                  aria-label="Book your consultation with Arvado"
                >
                  Book Your Consultation
                </a>
              </div>
            </div>

            {/* Consultation Process Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: 'Business Analysis',
                  description: 'We dive deep into your operations, workflows, and customer interactions to identify pain points and opportunities',
                  icon: (
                    <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                },
                {
                  title: 'Solution Design',
                  description: 'Based on our analysis, we create custom AI solutions tailored to your specific business needs and challenges',
                  icon: (
                    <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                },
                {
                  title: 'Implementation Plan',
                  description: 'We provide a clear roadmap for implementing your AI solution, including timelines and success metrics',
                  icon: (
                    <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  )
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Enterprise-Grade AI Technology Section */}
        <section className="py-12 px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Experience Enterprise-Grade AI Technology</h2>
              <p className="text-sm text-gray-300 max-w-3xl mx-auto">
                Discover how our AI solutions can transform your business operations and customer interactions
              </p>
            </div>

            {/* Combined AI Technology & Demo Line Section */}
            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-lg p-8 mb-12">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">Ready to Experience the Future?</h3>
                <p className="text-sm text-gray-300 mb-6 max-w-2xl mx-auto">
                  Our AI solutions are designed to handle the most complex business challenges. From customer service to sales optimization, we provide enterprise-grade technology that scales with your business.
                </p>
                
                {/* Demo Line Integration */}
                <div className="bg-gray-700/40 rounded-lg p-4 mt-6">
                  <div className="flex items-center justify-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg flex items-center justify-center border border-green-500/30">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Demo Line</h4>
                      <div className="text-xl md:text-2xl font-mono font-bold text-green-400 tracking-wider">
                        +1 (555) 123-4567
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs">Available 24/7</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-xs">No wait times</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs">Enterprise-grade AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Capabilities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-4">What Our AI Can Do</h3>
                <div className="space-y-3">
                  {[
                    'Handle complex customer inquiries',
                    'Process sales and support tickets',
                    'Automate repetitive tasks',
                    'Provide 24/7 availability',
                    'Scale with your business growth',
                    'Integrate with existing systems'
                  ].map((capability, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-4">Testing Scenarios</h3>
                <div className="space-y-3">
                  {[
                    'Customer service inquiries',
                    'Sales qualification calls',
                    'Technical support issues',
                    'Product information requests',
                    'Appointment scheduling',
                    'Order status updates'
                  ].map((scenario, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{scenario}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>


          </div>
        </section>





        {/* Footer */}
        <footer className="bg-gray-800/50 border-t border-gray-700/50 py-12">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center">
              <span className="text-xl font-bold text-white font-mono">Arvado</span>
              <p className="text-sm text-gray-400 mt-3">Transforming businesses with intelligent AI solutions</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
