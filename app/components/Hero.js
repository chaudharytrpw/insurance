const cards = [
  { icon: "🚗", label: "Car Policy", tilt: "-rotate-6", offset: "translate-y-2" },
  { icon: "🏍️", label: "Bike Policy", tilt: "rotate-2", offset: "-translate-y-3" },
  { icon: "🚚", label: "Truck Policy", tilt: "rotate-6", offset: "translate-y-6" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-gray-900">
      {/* Background Blur */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-40"></div>
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-yellow-100 blur-3xl opacity-40"></div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-700">
            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
            Trusted by 5000+ Vehicle Owners
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Protect Your Vehicle with
            <span className="block text-orange-500">
              Trusted Insurance Solutions
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Get affordable Car, Bike, Commercial Vehicle, Truck, Bus and EV
            Insurance with fast policy issuance, hassle-free renewals and
            reliable claim assistance.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-orange-800"
            >
              Get Free Quote
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-orange-500 px-6 py-3 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Cards */}
        <div className="relative flex h-[420px] items-center justify-center">
          {cards.map((card, i) => (
            <div
              key={card.label}
              className={`absolute w-56 rounded-2xl border border-gray-200 bg-white p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${card.tilt} ${card.offset}`}
              style={{
                left: `${i * 70}px`,
                zIndex: cards.length - i,
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl">{card.icon}</span>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {card.label}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Active & Protected
              </p>

              <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-4/5 rounded-full bg-yellow-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}