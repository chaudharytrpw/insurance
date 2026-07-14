export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl px-8 py-14 text-center shadow-2xl sm:px-14 sm:py-16">
          {/* Background Circles */}
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10"></div>

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
              🚗 Get Your Insurance Today
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
              Need Vehicle Insurance?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-100">
              Contact <strong>Arvind Insurance Center</strong> for the best Car,
              Bike, Commercial Vehicle, Truck, Bus, and EV insurance plans with
              instant policy issuance and hassle-free claim assistance.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+916200255088"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-orange-500 shadow-lg transition hover:scale-105 hover:shadow-xl"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/918051266584"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-orange-500"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}