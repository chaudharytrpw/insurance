"use client"
import { useState } from "react";
import { Check, X } from "lucide-react";

const features = [
  {
    name: "Instant Online Policy Purchase",
    comprehensive: true,
    thirdParty: true,
    zeroDep: true,
  },
  {
    name: "No Hidden Charges",
    comprehensive: true,
    thirdParty: true,
    zeroDep: true,
  },
  {
    name: "Cashless Garage Network",
    comprehensive: true,
    thirdParty: false,
    zeroDep: true,
  },
  {
    name: "24×7 Claim Assistance",
    comprehensive: true,
    thirdParty: true,
    zeroDep: true,
  },
  {
    name: "Fast Policy Renewal",
    comprehensive: true,
    thirdParty: true,
    zeroDep: true,
  },
  {
    name: "Own Damage Cover",
    comprehensive: true,
    thirdParty: false,
    zeroDep: true,
  },
  {
    name: "Third-Party Liability Cover",
    comprehensive: true,
    thirdParty: true,
    zeroDep: false,
  },
  {
    name: "Accidental Damage Protection",
    comprehensive: true,
    thirdParty: false,
    zeroDep: true,
  },
  {
    name: "Zero Depreciation Benefit",
    comprehensive: false,
    thirdParty: false,
    zeroDep: true,
  },
  {
    name: "Engine Protection Add-on",
    comprehensive: true,
    thirdParty: false,
    zeroDep: true,
  },
  {
    name: "Roadside Assistance",
    comprehensive: true,
    thirdParty: false,
    zeroDep: true,
  },
  {
    name: "No Claim Bonus (NCB)",
    comprehensive: true,
    thirdParty: false,
    zeroDep: true,
  },
];

const columns = [
  {
    key: "comprehensive",
    label: "Comprehensive",
  },
  {
    key: "thirdParty",
    label: "Third-Party",
  },
  {
    key: "zeroDep",
    label: "Zero Depreciation",
  },
];

function Icon({ value }) {
  return value ? (
    <Check className="w-5 h-5 text-emerald-500 mx-auto" strokeWidth={3} />
  ) : (
    <X className="w-5 h-5 text-red-500 mx-auto" strokeWidth={3} />
  );
}

export default function WhyChooseUs() {
  const [showAll, setShowAll] = useState(false);

  const visibleFeatures = showAll ? features : features.slice(0, 7);

  return (
    <section className="bg-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0a2540] mb-3">
            Compare Vehicle Insurance Plans
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Compare the benefits of Comprehensive, Third-Party, and Zero
            Depreciation vehicle insurance plans to choose the right protection
            for your car or bike.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden sm:block overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] bg-[#f6d9bd] px-6 py-4">
            <span className="font-bold text-[#0a2540]">
              Insurance Features
            </span>

            {columns.map((col) => (
              <span
                key={col.key}
                className="text-center font-bold text-[#0a2540]"
              >
                {col.label}
              </span>
            ))}
          </div>

          {/* Rows */}
          {visibleFeatures.map((feature, index) => (
            <div
              key={feature.name}
              className={`grid grid-cols-[2fr_1fr_1fr_1fr] items-center px-6 py-4 ${
                index % 2 === 0 ? "bg-[#fdf0e2]" : "bg-[#fbe4cd]"
              }`}
            >
              <span className="text-sm text-[#0a2540]">
                {feature.name}
              </span>

              {columns.map((col) => (
                <div key={col.key}>
                  <Icon value={feature[col.key]} />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="sm:hidden space-y-4">
          {visibleFeatures.map((feature) => (
            <div
              key={feature.name}
              className="rounded-xl bg-[#fdf0e2] p-4 shadow-sm"
            >
              <h3 className="mb-4 font-semibold text-[#0a2540]">
                {feature.name}
              </h3>

              <div className="grid grid-cols-3 gap-3 text-center">
                {columns.map((col) => (
                  <div key={col.key}>
                    <Icon value={feature[col.key]} />
                    <p className="mt-1 text-[11px] text-gray-600">
                      {col.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {!showAll && features.length > 7 && (
          <div className="w-full  text-center">
            <button
              onClick={() => setShowAll(true)}
              className="rounded-lg bg-[#0a2540] w-full cursor-pointer px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#163a5c]"
            >
              View All Features
            </button>
          </div>
        )}

        {/* Show Less Button */}
        {showAll && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(false)}
              className="rounded-lg border border-[#0a2540] px-6 py-3 text-sm font-semibold text-[#0a2540] transition hover:bg-[#0a2540] hover:text-white"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}