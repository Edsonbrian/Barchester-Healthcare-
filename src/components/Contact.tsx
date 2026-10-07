import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">
            Get In Touch With Us
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Our healthcare team is available to answer your questions and
            provide support whenever you need assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="space-y-6">

            <div className="bg-white p-6 rounded-2xl shadow-md flex gap-4">
              <div className="bg-blue-100 p-4 rounded-xl">
                <MapPin className="text-blue-700" size={28} />
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900">
                  Address
                </h3>
                <p className="text-gray-600">
                  London, United Kingdom
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md flex gap-4">
              <div className="bg-blue-100 p-4 rounded-xl">
                <Phone className="text-blue-700" size={28} />
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900">
                  Phone
                </h3>
                <p className="text-gray-600">
                  +44 79 3457 2010
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md flex gap-4">
              <div className="bg-blue-100 p-4 rounded-xl">
                <Mail className="text-blue-700" size={28} />
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900">
                  Email
                </h3>
                <p className="text-gray-600">
                  info@barchesterhealthcare.com
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md flex gap-4">
              <div className="bg-blue-100 p-4 rounded-xl">
                <Clock className="text-blue-700" size={28} />
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900">
                  Working Hours
                </h3>
                <p className="text-gray-600">
                  Monday - Sunday
                  <br />
                  Open 24 Hours
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Send Us A Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold transition duration-300"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}