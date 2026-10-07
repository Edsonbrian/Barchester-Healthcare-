import { Users, Building2, HeartHandshake, Award } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <Award size={40} />,
      number: "20+",
      title: "Years Experience",
    },
    {
      icon: <Users size={40} />,
      number: "500+",
      title: "Healthcare Professionals",
    },
    {
      icon: <Building2 size={40} />,
      number: "50+",
      title: "Care Homes",
    },
    {
      icon: <HeartHandshake size={40} />,
      number: "10,000+",
      title: "Happy Residents",
    },
  ];

  return (
    <section
      id="stats"
      className="py-24 bg-gradient-to-r from-blue-700 to-blue-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Our Achievements
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
            Trusted Healthcare Excellence
          </h2>

          <p className="text-blue-100 mt-5 max-w-2xl mx-auto">
            Delivering exceptional healthcare services and compassionate care
            across the United Kingdom.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center hover:scale-105 transition duration-300"
            >
              <div className="flex justify-center text-white mb-5">
                {stat.icon}
              </div>

              <h3 className="text-5xl font-bold text-white">
                {stat.number}
              </h3>

              <p className="text-blue-100 mt-3 font-medium">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}