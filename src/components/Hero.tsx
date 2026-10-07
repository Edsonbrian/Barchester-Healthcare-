// Hero.tsx

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1974&auto=format&fit=crop"
        alt="Healthcare"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen pt-24">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>

              <p className="text-black text-sm font-bold medium">
                Trusted Healthcare Services
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-white">
              Compassionate
              <span className="text-blue-300"> Healthcare </span>
              & Professional Support
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg text-blue-100 max-w-xl leading-relaxed">
              Barchester Healthcare Limited provides exceptional nursing,
              homecare, and support services with professionalism, dignity,
              and compassion across communities.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5">
              <button className="bg-blue-700 text-white-800 px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition duration-300 shadow-2xl">
                Apply Now
              </button>

              <button className="border border-white/30 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition duration-300">
                Contact Us
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14">
              <div>
                <h2 className="text-3xl font-bold text-white">10+</h2>
                <p className="text-blue-200 mt-2">Years Experience</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">500+</h2>
                <p className="text-blue-200 mt-2">Care Professionals</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">24/7</h2> 
                <p className="text-blue-200 mt-2">Support Available</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative"> </div>
              
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 w-[340px] shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Why Choose Us?
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white font-bold">
                      ✓
                    </div>

                    <div>
                      <h4 className="text-white font-semibold text-lg">
                        Qualified Staff
                      </h4>

                      <p className="text-blue-100 text-sm mt-1">
                        Experienced healthcare professionals delivering quality
                        care.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center text-white font-bold">
                      ✓
                    </div>

                    <div>
                      <h4 className="text-white font-semibold text-lg">
                        24/7 Assistance
                      </h4>

                      <p className="text-blue-100 text-sm mt-1">
                        Reliable support available whenever needed.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-pink-500 flex items-center justify-center text-white font-bold">
                      ✓
                    </div>

                    <div>
                      <h4 className="text-white font-semibold text-lg">
                        Trusted Services
                      </h4>

                      <p className="text-blue-100 text-sm mt-1">
                        Providing compassionate and professional healthcare
                        solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl p-6 shadow-2xl">
                <h4 className="text-4xl font-bold text-blue-700">98%</h4>

                <p className="text-gray-600 mt-1s">
                  Client Satisfaction Rate
                </p>
              </div>
          </motion.div>  
            </div>
        </div>
    </section>
  );
}