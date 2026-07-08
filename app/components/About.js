export default function About() {
  return (
    <section id="about" className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        
        {/* Left Card */}
        <div className="relative">
          <div className="rounded-3xl bg-orange-500 p-8 text-white shadow-2xl sm:p-10">
            <svg
              className="h-10 w-10 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L4 5V11C4 16.5 7.4 21.2 12 22C16.6 21.2 20 16.5 20 11V5L12 2Z" />
            </svg>

            <p className="mt-8 text-2xl font-semibold leading-relaxed">
              “Guiding every customer to the policy that actually fits their
              vehicle and their budget.”
            </p>

            <div className="mt-8 border-t border-white/30 pt-6">
              <h3 className="text-3xl font-bold">10+ Years</h3>
              <p className="mt-2 text-orange-100">
                Serving vehicle owners across the region
              </p>
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-orange-200 bg-white p-5 shadow-xl sm:block">
            <h3 className="text-3xl font-bold text-orange-500">15+</h3>
            <p className="text-sm text-gray-600">Insurance Partners</p>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-500">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            About Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-orange-500">
            About Arvind Insurance Center
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Arvind Insurance Center is a trusted vehicle insurance service
            provider offering reliable insurance solutions for Cars, Bikes,
            Commercial Vehicles, Trucks, Buses, and Electric Vehicles.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Our experienced team helps customers choose the right insurance plan
            with transparent guidance, affordable premiums, hassle-free policy
            renewals, and dedicated claim support.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-xl border-2 border-orange-500 px-6 py-3 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}