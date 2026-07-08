export default function ResearchStat() {
  return (
    <section className="bg-[#e8690b] py-12 sm:py-16 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug text-[#0a2540]">
            Research shows that{" "}
            <span className="text-white">51% of customers</span> who search
            for car insurance <span className="text-white">save up to 30%</span>{" "}
            on their annual premium.
          </h2>
        </div>

        {/* Image — replace src with your own image path */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/imgs/img_res.png"
            alt="Woman analyzing car insurance savings on a dashboard chart"
            className="w-full max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}