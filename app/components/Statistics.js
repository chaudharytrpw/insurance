"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "Happy Customers" },
  { value: 10000, suffix: "+", label: "Policies Issued" },
  { value: 15, suffix: "+", label: "Insurance Partners" },
];

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = Math.ceil(end / 80);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(current);
    }, 20);

    return () => clearInterval(timer);
  }, [start, end]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-8 rounded-3xl bg-orange-50 p-10 shadow-lg sm:grid-cols-4 lg:p-14">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <h3 className="text-4xl font-bold text-orange-500">
                <Counter end={stat.value} suffix={stat.suffix} />
              </h3>

              <p className="mt-2 text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}