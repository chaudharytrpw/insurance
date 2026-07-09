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
    email: "",
    vehicle: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);

    setForm((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Name validation
    if (form.name.trim().length < 3) {
      toast.error("Name must be at least 3 characters.");
      return;
    }

    // Phone validation
    if (!/^\d{10}$/.test(form.phone)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);

    // Under Development
    toast.success("Quote request feature is under development.");

    setForm({
      name: "",
      phone: "",
      email: "",
      vehicle: "",
      message: "",
    });

    setLoading(false);
  };

  const cards = [
    {
      icon: MapPin,
      title: "Address",
      value: "Ladaura, Chawk Near Patna Bypass Road",
    },
    {
      icon: Phone,
      title: "Office",
      value: "6200255088",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "8051266584",
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

      {/* Contact Cards */}
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

      {/* Contact Form */}
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
              {/* Name */}
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                minLength={3}
                pattern="[A-Za-z ]{3,}"
                title="Name must be at least 3 characters."
                className="w-full border rounded-lg px-4 py-3"
              />

              {/* Phone */}
              <input
                required
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handlePhoneChange}
                placeholder="Mobile Number"
                maxLength={10}
                pattern="[0-9]{10}"
                title="Enter a valid 10-digit mobile number."
                className="w-full border rounded-lg px-4 py-3"
              />

              {/* Email */}
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3"
              />

              {/* Vehicle */}
              <select
                required
                name="vehicle"
                value={form.vehicle}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              >
                <option value="">Select Vehicle</option>
                <option value="Bike Insurance">Bike Insurance</option>
                <option value="Car Insurance">Car Insurance</option>
                <option value="Truck Insurance">Truck Insurance</option>
                <option value="Bus Insurance">Bus Insurance</option>
                <option value="Commercial Vehicle">
                  Commercial Vehicle
                </option>
                <option value="EV / E-Rickshaw">
                  EV / E-Rickshaw
                </option>
              </select>

              {/* Message */}
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full border rounded-lg px-4 py-3"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white py-3 rounded-lg font-semibold transition"
              >
                {loading ? "Sending..." : "Get Free Quote"}
              </button>
            </form>
          </div>

          {/* Google Map */}
          <iframe
            title="Google Map"
            className="rounded-2xl shadow h-[500px] w-full"
            src="https://www.google.com/maps?q=Patna,Bihar&output=embed"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}