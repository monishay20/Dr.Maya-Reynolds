
const areas = [
  {
    title: "Anxiety & Stress",
    desc: "Support for chronic worry, overthinking, panic, and emotional overwhelm using evidence-based techniques.",
    image: "https://plus.unsplash.com/premium_photo-1769871679526-cd88c83c9994?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    icon: "🧠",
  },
  {
    title: "Trauma & PTSD",
    desc: "Gentle, trauma-informed therapy including EMDR and somatic approaches for deep emotional healing.",
    image: "https://media.istockphoto.com/id/1346536931/photo/very-bored-and-sad-woman-leaning-on-the-window-of-her-house-looking-away-for-so-much-time-of.jpg?s=1024x1024&w=is&k=20&c=2o_waJFZNldZJGR15Ct-TxFvyHUGd-HDo3i4xZj1eE0=",
    icon: "🌿",
  },
  {
    title: "Burnout & Life Transitions",
    desc: "Helping professionals and individuals navigate burnout, career stress, and major life changes.",
    image: "https://plus.unsplash.com/premium_photo-1689177357589-fb06fc00da07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "✨",
  },
];

const cardColors = [
  "bg-[#e5f9da]", // soft green
  "bg-[#fef3c7]", // warm beige
  "bg-[#fae8ff]", // soft lavender
  "bg-[#ffe4e6]", // soft rose
  "bg-[#e0f2fe]", // soft blue
  
  "bg-[#ecfeff]", // mint
];

const overlays = [
  "bg-green-900/5",
  "bg-yellow-900/5",
  "bg-blue-900/5",
  "bg-purple-900/5",
  "bg-pink-900/5",
  "bg-cyan-900/5",
];

const AreasOfFocus = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="flex flex-col items-center max-w-2xl mb-16 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-[#223614] mb-6">
            Areas of Focus
          </h2>
          <p className="text-lg text-[#4b5f55]">
            Therapy tailored to your unique experiences, challenges, and goals —
            in a calm, supportive environment.
          </p>
        </div>


        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {areas.map((item, index) => (
    <div
      key={index}
      className={`
        group
        ${cardColors[index % cardColors.length]}
        rounded-3xl
        overflow-hidden
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      `}
            >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden">
                <div
                  className="
                    absolute inset-0
                    bg-cover bg-center
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                  style={{
                    backgroundImage: `url(${item.image || "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?q=80&w=1200&auto=format&fit=crop"})`,
                  }}
                />
                {/* Soft overlay */}
                <div className="absolute inset-0 bg-[#223614]/10" />
              </div>

              {/* Content */}
              <div className="px-10 py-10">
                <div className="flex mb-4">
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="text-xl font-medium text-[#223614] mt-2">
                  {item.title}
                </h3>
                </div>
                <p className="text-[#4b5f55] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AreasOfFocus;

