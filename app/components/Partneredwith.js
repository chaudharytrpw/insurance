const partners = [
  {
    name: "TATA AIG",
    logo: "/images/partners/tata-aig.png",
  },
  {
    name: "Shriram General Insurance",
    logo: "/images/partners/shriram.png",
  },
  {
    name: "GoDigit Insurance",
    logo: "/images/partners/godigit.png",
  },
  {
    name: "United India Insurance",
    logo: "/images/partners/united-india.png",
  },
  {
    name: "Bajaj Allianz",
    logo: "/images/partners/bajaj-allianz.png",
  },
];

export default function PartneredWith() {
  return (
    <section className="bg-orange-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Our Trusted Partners
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Authorized Insurance Companies
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            We provide vehicle insurance through India's leading insurance
            companies with quick quotations, policy renewal and claim support.
          </p>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center rounded-xl border border-orange-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0"
              />

              <p className="mt-4 text-center text-sm font-semibold text-slate-700">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}