import { MapPin, ArrowRight } from "lucide-react";

export default function CareHomes() {
  const homes = [
    {
      name: "Meadow View Care Home",
      location: "London",
      image: "/src/assets/meadow-view.jpg",
      description:
        "Providing residential, nursing, and dementia care in a modern and welcoming environment.",
    },
    {
      name: "Rose Court Care Home",
      location: "Manchester",
      image: "/src/assets/rose-court.jpg",
      description:
        "Professional nursing care with comfortable accommodation and personalised support.",
    },
    {
      name: "Oakwood Care Home",
      location: "Birmingham",
      image: "/src/assets/oakwood.jpg",
      description:
        "A peaceful home offering exceptional residential care and engaging daily activities.",
    },
    {
      name: "Willow Gardens Care Home",
      location: "Leeds",
      image: "/src/assets/willow-gardens.jpg",
      description:
        "Dedicated to delivering compassionate care with experienced healthcare professionals.",
    },
    {
      name: "Riverside Care Home",
      location: "Liverpool",
      image: "/src/assets/riverside.jpg",
      description:
        "24-hour nursing support, rehabilitation services, and comfortable living spaces.",
    },
    {
      name: "Green Meadows Care Home",
      location: "Bristol",
      image: "/src/assets/green-meadows.jpg",
      description:
        "A warm, friendly environment offering tailored care plans for every resident.",
    },
  ];

  return (
    <section
      id="carehomes"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Our Care Homes
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">
            Find a Barchester Care Home
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg">
            Discover our welcoming care homes across the United Kingdom,
            providing residential, nursing, dementia and respite care in safe,
            comfortable environments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {homes.map((home, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={home.image}
                alt={home.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-7">
                <div className="flex items-center gap-2 text-blue-700 mb-3">
                  <MapPin size={18} />
                  <span className="font-medium">{home.location}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {home.name}
                </h3>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  {home.description}
                </p>

                <div className="mt-6">
                  <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl transition">
                    View Details
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}