import { ShieldCheck, Clock, Users, TrendingUp } from "lucide-react";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "50K+", label: "Happy Customers" },
  { value: "25+", label: "Insurance Partners" },
  { value: "98%", label: "Claim Success Rate" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Trusted Protection",
    description:
      "We partner with only the most reliable insurers to make sure you're covered when it matters most.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description:
      "Compare and buy a policy in minutes, not days. No paperwork, no waiting rooms, no hassle.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Our support team is available 24/7 to help you choose the right plan and file claims quickly.",
  },
  {
    icon: TrendingUp,
    title: "Best Prices",
    description:
      "We negotiate with providers so you always get competitive rates without compromising coverage.",
  },
];

const team = [
  {
    name: "Sarah Mitchell",
    role: "Chief Executive Officer",
    image: "/images/team/sarah.png",
  },
  {
    name: "David Chen",
    role: "Head of Operations",
    image: "/images/team/david.png",
  },
  {
    name: "Priya Sharma",
    role: "Customer Success Lead",
    image: "/images/team/priya.png",
  },
  {
    name: "James Carter",
    role: "Product Manager",
    image: "/images/team/james.png",
  },
];

export default function Page() {
  return (
    <main className="bg-white">
      {/* ---------- Hero ---------- */}
      <section className="bg-[#0a2540] py-16 sm:py-20 lg:py-28 px-6 sm:px-10 lg:px-16 text-center">
        <p className="text-sm sm:text-base font-semibold text-orange-400 uppercase tracking-wide mb-4">
          About Us
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
          Making car insurance simple, honest, and affordable
        </h1>
        <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna
          lectus, mattis non accumsan in, tempor dictum neque.
        </p>
      </section>

      {/* ---------- Our story ---------- */}
      <section className="py-14 sm:py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <img
              src="/images/about/our-story.png"
              alt="Autowa team working together"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540] mb-5">
              Our Story
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna
              lectus, mattis non accumsan in, tempor dictum neque. Nulla
              facilisi. Praesent euismod, nisi eu consectetur consectetur.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section className="bg-[#fbe9d9] py-12 sm:py-16 px-6 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0a2540]">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Why choose us / values ---------- */}
      <section className="py-14 sm:py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540] mb-3">
              What Sets Us Apart
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna
              lectus, mattis non accumsan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="text-center sm:text-left p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-5 mx-auto sm:mx-0">
                    <Icon className="w-6 h-6 text-[#e8690b]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0a2540] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Team ---------- */}
      <section className="bg-[#fbe9d9] py-14 sm:py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540] mb-3">
              Meet Our Team
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto">
              The people behind Autowa working every day to make insurance
              easier for you.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-sm sm:text-base font-bold text-[#0a2540]">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-[#e8690b] py-14 sm:py-16 px-6 sm:px-10 lg:px-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540] mb-4">
          Ready to find your perfect plan?
        </h2>
        <p className="text-sm sm:text-base text-white max-w-lg mx-auto mb-8">
          Compare quotes from top insurers in minutes and start saving on
          your car insurance today.
        </p>
        <button className="bg-[#0a2540] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#0d3357] transition-colors">
          Get a Free Quote
        </button>
      </section>
    </main>
  );
}