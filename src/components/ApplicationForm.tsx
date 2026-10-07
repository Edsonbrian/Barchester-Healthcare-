import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ApplicationForm() {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_vooo2l9",
        "template_9xn0tfi",
        form.current,
        "D_xRH4zsoRlXwgw6l"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          form.current?.reset();
        },
        (error) => {
          console.error(error);
          setLoading(false);
          alert("Failed to submit application.");
        }
      );
  };

  return (
    <section
      id="application"
      className="py-24 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Apply For A Position
          </h2>

          <p className="text-center text-gray-600 mb-10">
            Complete the form below and our recruitment team will contact you.
          </p>

          {success && (
            <div className="bg-green-100 border border-green-300 text-green-700 p-4 rounded-xl mb-6">
              ✅ Application submitted successfully!
            </div>
          )}
 
          <form ref={form} onSubmit={sendEmail} className="space-y-6">

            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="tel"
              name="phone" 
              placeholder="Phone Number"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="text"
              name="position"   
              placeholder="Position Applying For"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Cover Letter / Additional Information"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold text-lg transition duration-300"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>

          </form>

          {/* WhatsApp Option */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Prefer applying via WhatsApp?
            </p>

            <a
              href="https://wa.me/447934572010?text=Hello,%20I%20am%20interested%20in%20applying%20for%20a%20position%20at%20Barchester%20Healthcare.%20Please%20provide%20more%20information."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Apply via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}