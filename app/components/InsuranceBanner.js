export default function InsuranceBanner() {
  return (
    <section className="py-4 px-4 bg-white">
      <div className="max-w-8xl mx-auto">
        <div className="relative overflow-hidden  md:p-12 text-center ">

          {/* Badge */}
          <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            🚗 Bike & Car Insurance
          </span>

          {/* Heading */}
          <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-5xl">
            Apna Insurance Aaj Hi Karaye
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
            Agar aap apni <strong>Bike</strong> ya <strong>Car Insurance</strong>{" "}
            karwana chahte hain, to yahan se apply kar sakte hain. Hamari team
            aapse contact karke poori process complete karegi.
          </p>

          {/* Contact Button */}
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block rounded-xl bg-orange-500 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-orange-600"
            >
              📞 Contact Our Team
            </a>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
            Agar aap khud se online insurance karna chahte hain, to neeche diye
            gaye button par click karke aasani se insurance kar sakte hain.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://www.tataaig.com/partner/motor-insurance/two-wheeler-insurance"
              className="rounded-xl border-2 border-orange-500 px-8 py-3 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
            >
              🏍️ Bike Insurance
            </a>

            <a
              href="https://www.tataaig.com/partner/motor-insurance/car-insurance"
              className="rounded-xl bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              🚗 Car Insurance
            </a>
          </div>

          {/* Footer */}
          <div className="mt-10 border-t border-orange-400 pt-6">
            <p className="text-sm text-gray-500 md:text-base">
              ✔️ Fast Process &nbsp; • &nbsp;
              ✔️ 100% Trusted Support &nbsp; • &nbsp;
              ✔️ Quick Assistance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}