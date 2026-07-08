const services = [
  { icon: "🚗", title: "Car Insurance", desc: "Comprehensive & third-party cover for your car." },
  { icon: "🏍️", title: "Bike Insurance", desc: "Affordable protection for two-wheelers." },
  { icon: "🚛", title: "Truck Insurance", desc: "Coverage built for heavy commercial trucks." },
  { icon: "🚌", title: "Bus Insurance", desc: "Reliable plans for passenger bus fleets." },
  { icon: "🚐", title: "Commercial Vehicle", desc: "Tailored cover for business vehicles." },
  { icon: "⚡", title: "EV Insurance", desc: "Specialised policies for electric vehicles." },
  { icon: "🔄", title: "Policy Renewal", desc: "Quick, hassle-free renewal in minutes." },
  { icon: "📄", title: "Claim Assistance", desc: "End-to-end support when you need it most." },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 text-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-500">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            What We Offer
          </span>

          <h2 className="mt-5 text-4xl font-bold text-orange-500">
            Our Insurance Services
          </h2>

          <p className="mt-3 text-gray-600">
            Complete insurance solutions for personal and commercial vehicles.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-3xl transition group-hover:bg-orange-500 group-hover:text-white">
                {service.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-orange-500">
                {service.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}