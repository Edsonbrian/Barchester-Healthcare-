// Services.tsx

import { motion } from "framer-motion";
import {
  HeartPulse,
  Home,
  ShieldCheck,
  Stethoscope,
  Users,
  Brain,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <HeartPulse size={40} />,
      title: "Nursing Care",
      description:
        "Professional nursing support delivered with compassion and medical excellence.",
    },

    {
      icon: <Home size={40} />,
      title: "Home Care",
      description:
        "Reliable home-based healthcare assistance tailored to individual needs.",
    },

    {
      icon: <ShieldCheck size={40} />,
      title: "Live-in Care",
      description:
        "24/7 dedicated care services ensuring comfort, safety, and dignity.",
    },

    {
      icon: <Stethoscope size={40} />,
      title: "Medical Support",
      description:
        "Comprehensive healthcare monitoring and personalized medical assistance.",
    },

    {
      icon: <Users size={40} />,
      title: "Elderly Support",
      description:
        "Specialized support services focused on senior wellbeing and independence.",
    },

    {
      icon: <Brain size={40} />,
      title: "Mental Health Care",
      description:
        "Professional mental health and emotional wellbeing support services.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Subtitle */}
          <div className="inline-flex items-center gap-2 bg-blue-100 px-5 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-700 rounded-full"></span>

            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
              Our Services
            </p>
          </div>

          {/* Title */}
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Healthcare Services
            <span className="text-blue-700"> You Can Trust</span>
          </h2>

          {/* Description */}
          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            We provide a wide range of professional healthcare and support
            services designed to improve quality of life and wellbeing for
            individuals and families.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[32px] p-10 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-3 transition duration-500"
            >
              {/* Icon */}
              <div className="w-20 h-20 rounded-3xl bg-blue-100 text-blue-700 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition duration-500">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-gray-900 mt-8">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-5 leading-relaxed">
                {service.description}
              </p>

              {/* Button */}
              <button className="mt-8 text-blue-700 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 bg-blue-700 rounded-[40px] p-12 lg:p-16 text-center text-white shadow-2xl"
        >
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Need Professional Healthcare Support?
          </h2>

          <p className="mt-6 text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Our experienced healthcare professionals are ready to provide
            compassionate and reliable care services tailored to your needs.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition duration-300 shadow-xl">
              Contact Us
            </button>

            <button className="border border-white/30 backdrop-blur-md px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition duration-300">
              View Careers
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}