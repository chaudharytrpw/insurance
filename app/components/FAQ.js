"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    q: "Which vehicles do you insure?",
    a: "We provide insurance for Cars, Bikes, Trucks, Buses, Commercial Vehicles, and Electric Vehicles (EVs).",
  },
  {
    q: "Can I renew my expired policy?",
    a: "Yes. We help you renew expired as well as existing policies quickly and hassle-free.",
  },
  {
    q: "Do you help with insurance claims?",
    a: "Absolutely! Our team provides complete assistance throughout the claim process.",
  },
  {
    q: "Which insurance companies do you work with?",
    a: "We partner with leading insurance companies to offer multiple policy options at competitive prices.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="bg-orange-50 py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-500">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            Got Questions?
          </span>

          <h2 className="mt-5 text-4xl font-bold text-orange-500">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-gray-600">
            Find answers to the most common questions about our insurance
            services.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-12 space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.q}
                  </h3>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    {isOpen ? (
                      <FiMinus className="text-xl" />
                    ) : (
                      <FiPlus className="text-xl" />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-6 leading-7 text-gray-600">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}