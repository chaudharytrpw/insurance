import {
  ShieldCheck,
  Car,
  Bike,
  Truck,
  Bus,
  Zap,
  RefreshCw,
  Headset,
  Handshake,
  BadgePercent,
  FileCheck2,
  Building2,
  ArrowRight,
  Phone,
  Star,
  Quote,
} from "lucide-react";
import { Manrope, Inter } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  title: "About Us | Arvind Insurance Center",
  description:
    "Arvind Insurance Center is a trusted insurance service provider specializing in vehicle insurance for Cars, Bikes, Commercial Vehicles, Trucks, Buses, and EVs.",
};

const trustIndicators = [
  { value: "10+", label: "Years of Experience" },
  { value: "5000+", label: "Happy Customers" },
  { value: "15+", label: "Insurance Partners" },
];

const whyChooseUs = [
  {
    icon: ShieldCheck,
    label: "Trusted Insurance Advisor",
    detail: "Guidance you can rely on, backed by a decade in the industry.",
  },
  {
    icon: BadgePercent,
    label: "Affordable Premium Plans",
    detail: "Competitive pricing across every vehicle category.",
  },
  {
    icon: RefreshCw,
    label: "Quick Policy Renewal",
    detail: "Renewals processed with minimal paperwork, minimal delay.",
  },
  {
    icon: FileCheck2,
    label: "Claim Assistance",
    detail: "End-to-end support when you need it most.",
  },
  {
    icon: Building2,
    label: "Multiple Insurance Companies",
    detail: "Compare and choose from 15+ trusted partners.",
  },
  {
    icon: Headset,
    label: "Friendly Customer Support",
    detail: "A team that answers questions in plain language.",
  },
];

const services = [
  { icon: Car, label: "Car Insurance" },
  { icon: Bike, label: "Bike Insurance" },
  { icon: Truck, label: "Commercial Vehicle Insurance" },
  { icon: Truck, label: "Truck Insurance" },
  { icon: Bus, label: "Bus Insurance" },
  { icon: Car, label: "Taxi Insurance" },
  { icon: Zap, label: "EV Insurance" },
  { icon: RefreshCw, label: "Policy Renewal" },
  { icon: Handshake, label: "Insurance Claim Support" },
];

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "5000+", label: "Happy Customers" },
  { value: "15+", label: "Insurance Partners" },
  { value: "10000+", label: "Policies Renewed" },
];

export default function Page() {
  return (
    <main
      className={`${manrope.variable} ${inter.variable} bg-[#fbe9d9] font-[family-name:var(--font-body)]`}
    >
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#0a2540]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#e8690b]/10 blur-3xl sm:h-96 sm:w-96"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
          <div className="flex flex-col items-start">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e8690b]/30 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#e8690b]">
              <ShieldCheck className="h-3.5 w-3.5" />
              Arvind Insurance Center
            </span>

            <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Trusted Partner for{" "}
              <span className="text-[#e8690b]">Vehicle Insurance</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              At Arvind Insurance Center, we are committed to providing
              reliable and affordable vehicle insurance solutions. Whether
              you need a new policy, policy renewal, or claim assistance,
              our experienced team ensures a smooth and hassle-free
              experience.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#e8690b] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#e8690b]/20 transition hover:bg-[#d15f0a] sm:text-base"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+910000000000"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5 sm:text-base"
              >
                <Phone className="h-4 w-4" />
                Talk to an Advisor
              </a>
            </div>
          </div>

          {/* Trust indicator strip */}
          <div className="mt-14 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:mt-16 sm:gap-8 sm:pt-10">
            {trustIndicators.map((item) => (
              <div key={item.label}>
                <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-white sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-white/60 sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. About Us */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-px w-8 bg-[#e8690b]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#e8690b]">
                About Us
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[#0a2540] sm:text-3xl lg:text-4xl">
              Who We Are
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[#0a2540]/70 sm:text-base">
              Arvind Insurance Center is a trusted insurance service provider
              specializing in vehicle insurance. We help individuals and
              businesses secure the right insurance coverage for Cars, Bikes,
              Commercial Vehicles, Trucks, Buses, and Electric Vehicles. Our
              goal is to provide affordable insurance solutions with quick
              service, transparent guidance, and dedicated customer support.
            </p>
          </div>

          <div className="relative rounded-2xl border border-[#0a2540]/10 bg-white p-6 shadow-[0_1px_2px_rgba(10,37,64,0.04),0_12px_32px_-16px_rgba(10,37,64,0.15)] sm:p-8">
            <div className="mb-5 flex items-center gap-1 text-[#e8690b]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-xs font-medium text-[#0a2540]/50">
                Rated by our customers
              </span>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-[#e8690b]/20 pl-3">
                  <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-[#0a2540] sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-[#0a2540]/55 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Mission */}
      <section className="bg-[#0a2540]">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#e8690b]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#e8690b]">
              Our Mission
            </span>
            <span className="h-px w-8 bg-[#e8690b]" />
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Insurance, Made Simple
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
            Our mission is to make vehicle insurance simple, accessible, and
            affordable for everyone. We strive to offer the best insurance
            plans while ensuring fast policy issuance, timely renewals, and
            reliable claim assistance.
          </p>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-8 bg-[#e8690b]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#e8690b]">
              Why Choose Us
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[#0a2540] sm:text-3xl lg:text-4xl">
            What Sets Us Apart
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map(({ icon: Icon, label, detail }) => (
            <div
              key={label}
              className="rounded-xl border border-[#0a2540]/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-16px_rgba(10,37,64,0.2)]"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#0a2540]">
                <Icon className="h-5 w-5 text-[#e8690b]" />
              </span>
              <p className="font-[family-name:var(--font-display)] text-base font-bold text-[#0a2540]">
                {label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#0a2540]/60">
                {detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Our Services */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-px w-8 bg-[#e8690b]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#e8690b]">
                Our Services
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[#0a2540] sm:text-3xl lg:text-4xl">
              Coverage for Every Vehicle
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-[#0a2540]/10 bg-[#0a2540]/10 sm:grid-cols-3">
            {services.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group flex items-center gap-3 bg-white p-5 transition hover:bg-[#0a2540] sm:p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fbe9d9] transition group-hover:bg-[#e8690b]">
                  <Icon className="h-5 w-5 text-[#0a2540] transition group-hover:text-white" />
                </span>
                <p className="text-sm font-semibold text-[#0a2540] transition group-hover:text-white sm:text-base">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Strength */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-8 bg-[#e8690b]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#e8690b]">
              Our Strength
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[#0a2540] sm:text-3xl lg:text-4xl">
            Numbers That Speak for Us
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-2xl bg-[#0a2540] p-6 text-center sm:p-8"
            >
              <div
                className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#e8690b]/10"
                aria-hidden="true"
              />
              <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-[#e8690b] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-white/70 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Why Customers Trust Us */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <Quote className="mx-auto h-8 w-8 text-[#e8690b]/30" />
          <p className="mt-6 font-[family-name:var(--font-display)] text-lg font-medium leading-relaxed text-[#0a2540] sm:text-2xl">
            &ldquo;We believe in transparency, honest advice, and excellent
            customer service. Our experienced team helps every customer
            choose the right vehicle insurance plan based on their needs and
            budget.&rdquo;
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-[#0a2540]/50 sm:text-sm">
            Why Customers Trust Us
          </p>
        </div>
      </section>

      {/* 8. Call To Action */}
      <section id="contact" className="relative overflow-hidden bg-[#0a2540]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Protect Your Vehicle Today
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
            Get the best vehicle insurance plans at competitive prices.
            Contact Arvind Insurance Center today for instant quotes, policy
            renewals, and claim assistance.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#e8690b] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#e8690b]/20 transition hover:bg-[#d15f0a] sm:text-base"
            >
              Get Instant Quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+910000000000"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/5 sm:text-base"
            >
              <Phone className="h-4 w-4" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}