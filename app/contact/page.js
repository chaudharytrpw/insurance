import { MapPin, Mail, Phone, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    detail: "24, Wallstreet, NY 20001",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "info@autowa.com",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "+1 2345 67890",
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Mon - Sat: 9:00 AM - 7:00 PM",
  },
];

export default function Page() {
  return (
    <main className="bg-white">
      {/* ---------- Hero ---------- */}
      <section className="bg-[#0a2540] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 text-center">
        <p className="text-sm sm:text-base font-semibold text-orange-400 uppercase tracking-wide mb-4">
          Contact Us
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-2xl mx-auto leading-tight">
          We'd love to hear from you
        </h1>
        <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto mt-6">
          Have a question about a policy or claim? Our team is here to help
          you every step of the way.
        </p>
      </section>

      {/* ---------- Contact info cards ---------- */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 lg:px-16 -mt-10 sm:-mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-[#e8690b]" />
                </div>
                <h3 className="text-sm font-bold text-[#0a2540] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------- Form + Map ---------- */}
      <section className="py-8 sm:py-12 px-6 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Form */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540] mb-3">
              Send Us a Message
            </h2>
            <p className="text-sm text-gray-600 mb-8">
              Fill out the form below and our team will get back to you
              within 24 hours.
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#0a2540] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8690b]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0a2540] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8690b]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0a2540] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 234 567 8900"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8690b]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0a2540] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8690b]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0a2540] mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8690b] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#e8690b] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#cf5c09] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl overflow-hidden border border-gray-100 h-80 sm:h-96 lg:h-full min-h-[320px]">
              <iframe
                title="Autowa location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.155!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-[#fbe9d9] py-14 sm:py-16 px-6 sm:px-10 lg:px-16 text-center mt-8 sm:mt-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540] mb-4">
          Prefer to talk directly?
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto mb-8">
          Give us a call and one of our advisors will help you find the right
          policy in minutes.
        </p>
        <a
          href="tel:+12345678900"
          className="inline-block bg-[#0a2540] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#0d3357] transition-colors"
        >
          Call +1 234 567 8900
        </a>
      </section>
    </main>
  );
}