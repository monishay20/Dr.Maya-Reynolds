// import React from "react";

// const Hero = () => {
//   return (
//     <section className="bg-[#fbf8f5]">
//       <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//         {/* Left Content */}
//         <div className="text-[#223614]">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
//             Therapy for anxiety, burnout, and trauma — grounded, thoughtful, and supportive.
//           </h1>

//           <p className="text-base md:text-lg max-w-xl mb-8">
//             I help adults who feel overwhelmed, stuck in overthinking, or emotionally
//             on edge develop clarity, resilience, and a stronger relationship with
//             themselves.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <button className="bg-[#223614] text-white px-8 py-3 rounded-full text-sm hover:opacity-90 transition">
//               Book a Consultation
//             </button>

//             <button className="border border-[#223614] text-[#223614] px-8 py-3 rounded-full text-sm hover:bg-[#223614] hover:text-white transition">
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="w-full h-[420px] md:h-[520px] rounded-xl overflow-hidden">
//           <img
//             src="https://images.unsplash.com/photo-1620924721217-93fd71e354ff?q=80&w=1191&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Therapy office"
//             className="w-full h-full object-cover"
//           />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-[90vh] w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1620924721217-93fd71e354ff?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-6">
          Therapy for Anxiety, Trauma & Burnout
        </h1>

        <p className="text-base md:text-lg mb-8 opacity-90">
          A calm, supportive space for high-achieving adults feeling overwhelmed,
          anxious, or emotionally exhausted.
        </p>

        <button className="border border-white px-6 py-3 text-sm md:text-base tracking-wide hover:bg-white hover:text-[#223614] transition">
          SCHEDULE A CONSULTATION →
        </button>
      </div>
    </section>
  );
};

export default Hero;
