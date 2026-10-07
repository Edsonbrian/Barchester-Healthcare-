import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Faq() {
  const faqs = [
    {
      question: "What healthcare services do you provide?",
      answer:
        "We provide residential care, nursing care, dementia care, respite care, and specialist healthcare services tailored to individual needs.",
    },
    {
      question: "How can I apply for a job at Barchester Healthcare?",
      answer:
        "You can apply through our Careers section by selecting a vacancy and submitting your application online.",
    },
    {
      question: "Do you offer 24/7 care and support?",
      answer:
        "Yes, our dedicated healthcare professionals are available 24 hours a day, 7 days a week to provide quality care and support.",
    },
    {
      question: "Where are your care homes located?",
      answer:
        "Our care homes are located across various regions in the United Kingdom, providing accessible healthcare services to local communities.",
    },
    {
      question: "How can I contact your support team?",
      answer:
        "You can reach us through our Contact section, by phone, email, or by submitting the contact form on our website.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Find answers to common questions about our healthcare services,
            careers, and support.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>

                {openIndex === index ? (
                  <ChevronUp className="text-blue-700" size={24} />
                ) : (
                  <ChevronDown className="text-blue-700" size={24} />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}