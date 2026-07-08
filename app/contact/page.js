"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicle: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  toast.success("Quote request feature is under development.");

  setLoading(false);
};

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   setLoading(true);

  //   try {
  //     const res = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(form),
  //     });

  //     const data = await res.json();

  //     if (data.success) {
  //       toast.success("Quote request sent successfully.");

  //       setForm({
  //         name: "",
  //         phone: "",
  //         vehicle: "",
  //         message: "",
  //       });
  //     } else {
  //       toast.error(data.message);
  //     }
  //   } catch {
  //     toast.error("Something went wrong.");
  //   }

  //   setLoading(false);
  // };

  const cards = [
    {
      icon: MapPin,
      title: "Address",
      value: "Ladoun, Chawk Near Patna Bypass Road",
    },
    {
      icon: Phone,
      title: "Office",
      value: "6200255088",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "8057266584",
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Mon - Sat : 9AM - 7PM",
    },
  ];

  return (
    <main className="bg-gray-50">

      {/* Hero */}

      <section className="bg-slate-900 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Contact Us
        </h1>

        <p className="mt-5 text-gray-300 max-w-2xl mx-auto">
          Get your Vehicle Insurance Quote instantly from
          Arvind Insurance Center.
        </p>
      </section>

      {/* Cards */}

      <section className="-mt-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {cards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow p-6 text-center"
              >
                <div className="mx-auto h-14 w-14 rounded-full bg-orange-100 flex items-center justify-center">
                  <Icon className="text-orange-500" />
                </div>

                <h3 className="mt-4 text-black font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form */}

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

          <div className="bg-white rounded-2xl shadow p-8">

            <h2 className="text-3xl text-amber-600 font-bold">
              Get Free Quote
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 text-black mt-8"
            >

              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                required
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full border rounded-lg px-4 py-3"
              />

              <select
                required
                name="vehicle"
                value={form.vehicle}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              >
                <option value="">
                  Select Vehicle
                </option>

                <option>Bike Insurance</option>

                <option>Car Insurance</option>

                <option>Truck Insurance</option>

                <option>Bus Insurance</option>

                <option>Commercial Vehicle</option>

                <option>EV / E-Rickshaw</option>

              </select>

              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full border rounded-lg px-4 py-3"
              />

              <button
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
              >
                {loading ? "Sending..." : "Get Free Quote"}
              </button>

            </form>
          </div>

          {/* Map */}

          <iframe
            className="rounded-2xl shadow h-[500px] w-full"
            src="https://www.google.com/maps?q=Patna,Bihar&output=embed"
            loading="lazy"
          />

        </div>
      </section>

      {/* CTA */}


    </main>
  );
}