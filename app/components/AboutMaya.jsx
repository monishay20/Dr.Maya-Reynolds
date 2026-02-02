import Image from "next/image";

const AboutMaya = () => {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://image.slidesdocs.com/responsive-images/background/gorgeous-texture-of-light-green-powerpoint-background_89e32e5821__960_540.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Glassmorphism layer (full section) */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE (DESKTOP) */}
        <div className="relative h-[680px] xl:h-[740px] hidden lg:block rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/maya.png"
            alt="Dr. Maya Reynolds"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* RIGHT CONTENT (DIRECT ON GLASS) */}
        <div className="max-w-xl text-[#223614]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight">
            Meet Dr. Maya Reynolds, Santa Monica Clinical Psychologist
          </h2>

          <p className="text-base md:text-lg leading-relaxed mb-6">
            Dr. Maya Reynolds is a licensed clinical psychologist based in Santa
            Monica, California. She works with adults experiencing anxiety,
            trauma, burnout, and chronic stress.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-8">
            Her approach is warm, collaborative, and grounded—integrating
            evidence-based therapy to help clients feel safer, more regulated,
            and deeply understood.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base md:text-lg mb-10 list-disc list-inside">
            <li>Anxiety & Panic</li>
            <li>Trauma & EMDR</li>
            <li>Burnout & Perfectionism</li>
            <li>Mindfulness-Based Therapy</li>
          </ul>

          <button
            className="
              inline-flex items-center
              border border-[#223614]
              px-7 py-3
              rounded-full
              text-sm md:text-base
              tracking-wide
              hover:bg-[#223614]
              hover:text-[#fbf8f5]
              transition
              focus:ring-4 focus:ring-[#223614]/30
            "
          >
            Learn More About My Approach →
          </button>
        </div>
      </div>

      {/* MOBILE IMAGE */}
      <div className="relative lg:hidden mt-16 px-6">
        <div className="relative w-full h-[480px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/maya.png"
            alt="Dr. Maya Reynolds"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMaya;









