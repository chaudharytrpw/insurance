const steps = [
  {
    number: "01",
    title: "Share Your Details",
    desc: "Tell us about your vehicle and coverage needs.",
  },
  {
    number: "02",
    title: "Compare Insurance Plans",
    desc: "We show you options across trusted partners.",
  },
  {
    number: "03",
    title: "Choose the Best Policy",
    desc: "Pick the plan that fits your budget and needs.",
  },
  {
    number: "04",
    title: "Get Your Policy Instantly",
    desc: "Receive your policy document right away.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-orange-500 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-orange-500">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            How It Works
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            Get Insured in 4 Easy Steps
          </h2>

          <p className="mt-3 text-orange-100">
            A quick and hassle-free process to get your vehicle insured.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting Line */}
          <div className="absolute left-0 right-0 top-10 hidden h-1 bg-orange-300 lg:block"></div>

          {steps.map((step) => (
            <div key={step.number} className="relative z-10">
              {/* Number Circle */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-orange-600 text-3xl font-bold text-white shadow-lg">
                {step.number}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-orange-100">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}