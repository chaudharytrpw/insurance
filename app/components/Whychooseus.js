const reasons = [
  {
    title: "Trusted Insurance Advisor",
    desc: "Years of experience guiding customers to the right policy.",
  },
  {
    title: "Quick Policy Renewal",
    desc: "Renew expired or expiring policies in just a few minutes.",
  },
  {
    title: "Affordable Premiums",
    desc: "Compare plans across partners to get the best price.",
  },
  {
    title: "Fast Claim Assistance",
    desc: "Dedicated support so your claims move without delay.",
  },
  {
    title: "Multiple Insurance Partners",
    desc: "Access to 15+ leading insurance companies in one place.",
  },
  {
    title: "Friendly Customer Support",
    desc: "Real people, ready to help before and after you buy.",
  },
];

export default function WhyChooseus() {
  return (
    <section id="why-us" className="bg-orange-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-500">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            Our Promise
          </span>

          <h2 className="mt-5 text-4xl font-bold text-orange-500">
            Why Choose Arvind Insurance Center?
          </h2>

          <p className="mt-3 text-gray-600">
            We provide reliable insurance solutions with fast service, affordable
            premiums, and dedicated customer support.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                <svg
                  className="h-5 w-5"
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

              <div>
                <h3 className="text-lg font-semibold text-orange-500">
                  {reason.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}