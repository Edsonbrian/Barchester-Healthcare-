// Careers.tsx

import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock3,
  PoundSterling,
} from "lucide-react";

export default function Careers() {
  const jobs = [
    {
      title: "Care Assistant",
      location: "London, UK",
      type: "Full Time", 
      salary: "£24,000/year",
      description:
        "Provide compassionate personal care and support to residents and clients.",
    },

    {
      title: "Support Worker",
      location: "Manchester, UK",
      type: "Full Time",
      salary: "£26,000/year",
      description:
        "Assist individuals with daily activities and emotional wellbeing support.",
    },

    {
      title: "Registered Nurse",
      location: "Birmingham, UK",
      type: "Shift Based",
      salary: "£38,000/year",
      description:
        "Deliver professional nursing services and healthcare monitoring.",
    },

    {
      title: "Healthcare Assistant",
      location: "Leeds, UK",
      type: "Part Time",
      salary: "£22,000/year",
      description:
        "Support nursing teams in delivering quality healthcare services.",
    },
  ];

  return (
    <section
      id="careers"
      className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 px-5 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-700 rounded-full"></span>

            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
              Careers
            </p>
          </div>

          {/* Title */}
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Join Our
            <span className="text-blue-700"> Healthcare Team</span>
          </h2>

          {/* Description */}
          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            Build a rewarding healthcare career with Barchester Healthcare
            Limited and make a meaningful difference in people’s lives.
          </p>
        </motion.div>

        {/* Job Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-20">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] p-10 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition duration-500"
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Briefcase size={32} />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mt-6">
                    {job.title}
                  </h3>
                </div>

                <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl font-semibold transition duration-300">
                  Apply
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-600 mt-6 leading-relaxed">
                {job.description}
              </p>

              {/* Details */}
              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                
                {/* Location */}
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-blue-700">
                    <MapPin size={18} />

                    <span className="font-semibold text-sm">
                      Location
                    </span>
                  </div>

                  <p className="text-gray-700 mt-2 text-sm">
                    {job.location}
                  </p>
                </div>

                {/* Type */}
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-blue-700">
                    <Clock3 size={18} />

                    <span className="font-semibold text-sm">
                      Job Type
                    </span>
                  </div>

                  <p className="text-gray-700 mt-2 text-sm">
                    {job.type}
                  </p>
                </div>

                {/* Salary */}
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-blue-700">
                    <PoundSterling size={18} />

                    <span className="font-semibold text-sm">
                      Salary
                    </span>
                  </div>

                  <p className="text-gray-700 mt-2 text-sm">
                    {job.salary}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Application Section */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 bg-blue-700 rounded-[40px] p-12 lg:p-16 text-white shadow-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Ready To Start Your Career?
              </h2>

              <p className="mt-6 text-blue-100 text-lg leading-relaxed">
                Submit your application and become part of a compassionate,
                professional, and supportive healthcare team.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-5">
                <button className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition duration-300 shadow-xl">
                  Apply Now
                </button>

                <button className="border border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition duration-300">
                  Contact HR
                </button>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-[32px] p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Quick Application
              </h3>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  placeholder="Position Applying For"
                  className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                  rows={4}
                  placeholder="Tell us about yourself"
                  className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl font-semibold text-lg transition duration-300">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}