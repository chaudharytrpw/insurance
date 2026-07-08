import { FaStar } from "react-icons/fa";

const reviews = [
  {
    text: "Excellent service! My car insurance renewal was completed quickly without any hassle.",
    name: "Rohit Sharma",
    vehicle: "Car Insurance Customer",
  },
  {
    text: "Very professional guidance and affordable insurance plans. Highly recommended.",
    name: "Priya Menon",
    vehicle: "Bike Insurance Customer",
  },
  {
    text: "Fast claim assistance and friendly customer support.",
    name: "Suresh Yadav",
    vehicle: "Truck Insurance Customer",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-500">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-bold text-orange-500">
            What Our Customers Say
          </h2>

          <p className="mt-3 text-gray-600">
            Trusted by thousands of happy customers for reliable insurance
            services.
          </p>
        </div>

        {/* Reviews */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl"
            >
              {/* Stars */}
              <div className="flex gap-1 text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review Text */}
              <p className="mt-5 text-gray-600 leading-7">
                "{review.text}"
              </p>

              {/* User */}
              <div className="mt-6 flex items-center gap-4 border-t border-gray-200 pt-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-lg font-bold text-orange-500">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {review.vehicle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}