// About.tsx

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side Images */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1974&auto=format&fit=crop"
                alt="Healthcare Team"
                className="w-full h-[650px] object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
              <h2 className="text-5xl font-bold text-blue-700">10+</h2>

              <p className="text-gray-600 mt-2 font-medium">
                Years of Healthcare Excellence
              </p>
            </div>

            {/* Small Floating Badge */}
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-lg px-6 py-4 rounded-2xl shadow-lg">
              <p className="text-white-700 font-semibold">
                Trusted By Hundreds Of Families
              </p>
            </div>
          </motion.div> 

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Subtitle */}
            <div className="inline-flex items-center gap-2 bg-blue-100 px-5 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-700 rounded-full"></span>

              <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
                About Us
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Delivering Trusted
              <span className="text-blue-700"> Healthcare </span>
              With Compassion
            </h2>

            {/* Description */}
            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              Barchester Healthcare Limited is committed to providing
              compassionate, reliable, and professional healthcare support
              services tailored to meet the needs of individuals and families.
              Our experienced care professionals ensure dignity, comfort, and
              quality care at every stage.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              
              {/* Mission */}
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-5">
                  🎯
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  To deliver exceptional healthcare and support services that
                  improve lives through compassion and professionalism.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300">
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center text-3xl mb-5">
                  👁
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  To become a leading healthcare provider recognized for trusted
                  care, innovation, and excellence.
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <h3 className="text-4xl font-bold text-blue-700">500+</h3>

                <p className="text-gray-600 mt-2">
                  Healthcare Professionals
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-700">98%</h3>

                <p className="text-gray-600 mt-2">
                  Client Satisfaction
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-blue-700">24/7</h3>

                <p className="text-gray-600 mt-2">
                  Care Support
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-12">
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:scale-105 transition duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}