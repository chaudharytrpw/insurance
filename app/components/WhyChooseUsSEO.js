"use client";

import { useState } from "react";

export default function WhyChooseUsSEO() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-5xl">
            Why Choose Arvind Insurance Center in Muzaffarpur?
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Trusted Vehicle Insurance Advisor providing Car Insurance, Bike
            Insurance, Commercial Vehicle Insurance, Policy Renewal and Claim
            Assistance in Muzaffarpur, Bihar.
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 max-w-5xl text-lg leading-8 text-gray-700">
          {/* Always Visible */}
          <p>
            <strong>Arvind Insurance Center</strong> is a trusted{" "}
            <strong>Insurance Agent in Muzaffarpur</strong> providing affordable{" "}
            <strong>Car Insurance</strong>,{" "}
            <strong>Bike Insurance</strong>,{" "}
            <strong>Commercial Vehicle Insurance</strong>, Truck Insurance, Bus
            Insurance, EV Insurance, Policy Renewal and Claim Assistance. We
            help customers compare insurance plans from leading companies and
            choose the right policy at the best price.
          </p>

          {/* Hidden Content */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expanded ? "max-h-[2000px] opacity-100 mt-6" : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <p>
                If you are looking for the best{" "}
                <strong>Car Insurance in Muzaffarpur</strong>, our experienced
                team helps you compare multiple insurance plans to choose the
                right coverage according to your budget and requirements.
                Whether you need a new insurance policy or want to renew your
                existing one, we provide quick and hassle-free service.
              </p>

              <p>
                We also offer affordable{" "}
                <strong>Bike Insurance in Muzaffarpur</strong> with
                comprehensive and third-party coverage options. Our experts help
                you find the best insurance policy with affordable premiums and
                fast approval.
              </p>

              <p>
                Businesses can rely on us for{" "}
                <strong>Commercial Vehicle Insurance in Muzaffarpur</strong>,
                including Truck Insurance, Bus Insurance, Pickup Insurance,
                Goods Carrier Insurance and Electric Vehicle Insurance. We
                ensure your business vehicles remain protected with the right
                insurance plans.
              </p>

              <p>
                As an experienced{" "}
                <strong>Insurance Agent in Muzaffarpur</strong>, we work with
                top insurance companies like Tata AIG, HDFC ERGO, ICICI
                Lombard, Bajaj Allianz, Go Digit, Shriram and many more. We
                provide transparent guidance, instant policy issuance, easy
                renewals and complete claim assistance.
              </p>

              <p>
                Thousands of customers trust{" "}
                <strong>Arvind Insurance Center</strong> for reliable{" "}
                <strong>Vehicle Insurance in Muzaffarpur</strong>. Our mission
                is to deliver fast service, affordable premiums and dedicated
                customer support before and after every insurance policy.
              </p>

              {/* Stats */}
              <div className="grid gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl bg-white p-6 text-center shadow">
                  <h3 className="text-3xl font-bold text-orange-500">
                    5000+
                  </h3>
                  <p className="mt-2 text-gray-600">Happy Customers</p>
                </div>

                <div className="rounded-2xl bg-white p-6 text-center shadow">
                  <h3 className="text-3xl font-bold text-orange-500">
                    15+
                  </h3>
                  <p className="mt-2 text-gray-600">Insurance Partners</p>
                </div>

                <div className="rounded-2xl bg-white p-6 text-center shadow">
                  <h3 className="text-3xl font-bold text-orange-500">
                    10+
                  </h3>
                  <p className="mt-2 text-gray-600">Years Experience</p>
                </div>

                <div className="rounded-2xl bg-white p-6 text-center shadow">
                  <h3 className="text-3xl font-bold text-orange-500">
                    100%
                  </h3>
                  <p className="mt-2 text-gray-600">Customer Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Read More Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 rounded-full border border-orange-500 px-6 py-3 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
            >
              {expanded ? (
                <>
                  Read Less
                  <span>↑</span>
                </>
              ) : (
                <>
                  Read More
                  <span>↓</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}