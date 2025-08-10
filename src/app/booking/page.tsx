export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-900">


      {/* Main Content */}
      <div className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Back to Consultation Button */}
          <div className="mb-8">
            <a 
              href="/consultation" 
              className="inline-flex items-center px-4 py-2 bg-transparent text-green-400 font-semibold rounded-lg hover:bg-green-600/10 hover:text-white transition-colors duration-300 border border-green-500"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Consultation
            </a>
          </div>
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Book Your Consultation</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Choose a convenient time for your free AI solution consultation. Our experts are available to discuss your business needs.
            </p>
          </div>

          {/* Booking Form */}
          <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-lg p-8">
            <form className="space-y-8">
              {/* Date Selection */}
              <div>
                <label className="block text-lg font-semibold text-white mb-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Select Date</label>
                <div className="grid grid-cols-7 gap-3">
                  {Array.from({ length: 14 }, (_, i) => {
                    // Use a fixed base date to prevent hydration issues
                    const baseDate = new Date('2024-01-01');
                    baseDate.setDate(baseDate.getDate() + i + 1);
                    const dayName = baseDate.toLocaleDateString('en-US', { weekday: 'short' });
                    const dayNum = baseDate.getDate();
                    const month = baseDate.toLocaleDateString('en-US', { month: 'short' });
                    
                    return (
                      <button
                        key={i}
                        type="button"
                        className="p-4 bg-gray-700/50 border border-gray-600 rounded-lg text-white hover:bg-green-600/20 hover:border-green-500 transition-all duration-300"
                      >
                        <div className="text-xs text-gray-400">{dayName}</div>
                        <div className="text-lg font-bold">{dayNum}</div>
                        <div className="text-xs text-gray-400">{month}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-lg font-semibold text-white mb-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Select Time</label>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
                    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
                    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
                  ].map((time, index) => (
                    <button
                      key={index}
                      type="button"
                      className="p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white hover:bg-green-600/20 hover:border-green-500 transition-all duration-300"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Consultation Type */}
              <div>
                <label className="block text-lg font-semibold text-white mb-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Consultation Type</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-gray-700/50 border border-gray-600 rounded-lg">
                    <input type="radio" name="consultationType" value="video" className="w-4 h-4 text-green-600" defaultChecked />
                    <div>
                      <div className="text-white font-medium">Video Call</div>
                      <div className="text-gray-400 text-sm">Zoom, Teams, or Google Meet</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-gray-700/50 border border-gray-600 rounded-lg">
                    <input type="radio" name="consultationType" value="phone" className="w-4 h-4 text-green-600" />
                    <div>
                      <div className="text-white font-medium">Phone Call</div>
                      <div className="text-gray-400 text-sm">Direct phone consultation</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-lg font-semibold text-white mb-4">Additional Notes</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  placeholder="Any specific topics you'd like to discuss or questions you have..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                Confirm Booking
              </button>
            </form>

            {/* Booking Info */}
            <div className="mt-8 pt-8 border-t border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">What Happens Next?</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>You'll receive a confirmation email with meeting details</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Calendar invite will be sent to your email</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Our team will prepare a customized consultation based on your needs</span>
                </div>
              </div>
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
