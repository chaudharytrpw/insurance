const ourlogo = [
  {
    name: "ICICI Lombard",
    logo: "/pattener/icici.jpg",
  },
  {
    name: "HDFC ERGO",
    logo: "/pattener/hdfc.png",
  },
  {
    name: "Tata AIG",
    logo: "/pattener/tata.png",
  },
  {
    name: "Bajaj Allianz",
    logo: "/pattener/bajaj.jpg",
  },
  {
    name: "SBI General",
    logo: "/pattener/sbigeneral.jpg",
  },
  
 
  {
    name: "United India Insurance",
    logo: "/pattener/uiteii.jpg",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="bg-orange-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-10">
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-500">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            Our Network
          </span>

          <h2 className="mt-5 text-4xl font-bold text-orange-500">
            We Work With Leading Insurance Companies
          </h2>

          <p className="mt-3 text-gray-600">
            Trusted insurance partners offering the best plans and competitive
            premiums.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-3">
          {ourlogo.map((partner) => (
            <div
              key={partner.name}
              className="flex h-32 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-14 w-auto object-contain"
              />

              <h3 className="mt-4 text-center text-sm font-semibold text-gray-700">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}