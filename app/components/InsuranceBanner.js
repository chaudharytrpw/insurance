export default function InsuranceBanner() {
  return (
    <section className="bg-white px-4 py-8 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-orange-50 to-white p-6 text-center shadow-sm md:p-12">

          {/* Badge */}
          <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            🚗 Car • Bike • Commercial Vehicle Insurance
          </span>

          {/* Heading */}
          <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
            Car, Bike & Commercial Vehicle Insurance in{" "}
            <span className="text-orange-500">Muzaffarpur</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-gray-600 md:text-lg">
            Looking for the best{" "}
            <strong>Car Insurance in Muzaffarpur</strong>,{" "}
            <strong>Bike Insurance</strong> or{" "}
            <strong>Commercial Vehicle Insurance</strong>?
            <br className="hidden md:block" />
            <strong>Arvind Insurance Center</strong> helps you compare policies
            from leading insurance companies, renew existing policies and get
            quick claim assistance at affordable prices.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center rounded-xl bg-orange-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-orange-600"
            >
              📞 Get Free Insurance Quote
            </a>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600">
            Prefer buying insurance online? Click the buttons below to purchase
            your policy instantly through our trusted insurance partner.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://www.tataaig.com/partner?pmdata=8cd0d94c16fdc15fc4a99bc0944a2327:f7df795ed5783b2a148198a4cec5343634f8b1cb456055465879f2ca7d06f2a8fb1efdc3ff1a6187652e187fd6898144692c09e741c0fa68cb56297519e8bbc8d2dc424d9492f18178b52a55080e41734746ec62e821518c2c8f03526cdf409ca9c82be94878f29f99f2aab876b31e3cf3931b737473fef440c31768f52f2e38fb2b26939a2e03c1858000532a1810a4&utm_source=nova"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border-2 border-orange-500 px-8 py-3 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
            >
              🏍️ Buy Bike Insurance
            </a>

            <a
              href="https://www.tataaig.com/partner?pmdata=d19aa4f9db1a2d255acf90b6adbd1bf7:d47f46b80b78193cb752c020e249a754c0acaca9b085e1ec332a24a57d37d503617d41cc3f4e938fe000da27010d71bf501dcaf5805ffdfc47b38f5035cb3d391abaf44697d75b80a979b086cb0f356c6d137840acb1d6103664d8b7e3f6d7befc793261070c69e08295611caf4cebafb604fad36feee61ba20379e07c257df8152d353d5319bbaec3fd1156c1775c82&utm_source=nova"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              🚗 Buy Car Insurance
            </a>
          </div>

          {/* Features */}
          <div className="mt-10 border-t border-orange-200 pt-6">
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-600 md:text-base">
              <span>✅ Instant Quotes</span>
              <span>✅ Fast Policy Issuance</span>
              <span>✅ Policy Renewal</span>
              <span>✅ Claim Assistance</span>
              <span>✅ Trusted Insurance Advisor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}