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
            Insurance Aaj Hi Karaye
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
              href="https://www.tataaig.com/partner?pmdata=8cd0d94c16fdc15fc4a99bc0944a2327:f7df795ed5783b2a148198a4cec5343634f8b1cb456055465879f2ca7d06f2a8fb1efdc3ff1a6187652e187fd6898144692c09e741c0fa68cb56297519e8bbc8d2dc424d9492f18178b52a55080e41734746ec62e821518c2c8f03526cdf409ca9c82be94878f29f99f2aab876b31e3cf3931b737473fef440c31768f52f2e38fb2b26939a2e03c1858000532a1810a4&utm_source=nova"
              className="rounded-xl border-2 border-orange-500 px-8 py-3 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
            >
              🏍️ Bike Insurance
            </a>

            <a
              href="https://www.tataaig.com/partner?pmdata=d19aa4f9db1a2d255acf90b6adbd1bf7:d47f46b80b78193cb752c020e249a754c0acaca9b085e1ec332a24a57d37d503617d41cc3f4e938fe000da27010d71bf501dcaf5805ffdfc47b38f5035cb3d391abaf44697d75b80a979b086cb0f356c6d137840acb1d6103664d8b7e3f6d7befc793261070c69e08295611caf4cebafb604fad36feee61ba20379e07c257df8152d353d5319bbaec3fd1156c1775c82&utm_source=nova"
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