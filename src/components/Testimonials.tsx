import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Williams",
      role: "Family Member",
      review:   
        "The care and support provided were exceptional. The staff treated my mother with dignity and compassion at all times.",
    },
    {
      name: "David Johnson",
      role: "Resident",
      review:
        "The team is professional, caring, and always available when needed. I feel safe and valued every day.",
    },
    {
      name: "Emma Brown",
      role: "Family Member",
      review:
        "Excellent facilities and wonderful staff. We couldn't have chosen a better healthcare provider.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Hear from residents and families who trust Barchester Healthcare.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                "{item.review}"
              </p>

              <div>
                <h3 className="font-bold text-lg text-gray-900">
                  {item.name}
                </h3>

                <p className="text-blue-700 text-sm font-medium">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}