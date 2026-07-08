const partners = [
  { name: "Cubico", logo: "/images/partners/cubico.png" },
  { name: "Nuxeo", logo: "/images/partners/nuxeo.png" },
  { name: "King", logo: "/images/partners/king.png" },
  { name: "Coffee", logo: "/images/partners/coffee.png" },
  { name: "Hexagon", logo: "/images/partners/hexagon.png" },
];

export default function PartneredWith() {
  return (
    <section className="bg-[#fbe9d9] py-14 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540] mb-10 sm:mb-14">
          We're Partnered With
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center text-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-6 sm:h-7 lg:h-8 w-auto object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-200"
              />

              <p className="mt-3 text-sm font-medium text-[#0a2540]">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}