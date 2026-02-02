
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
          Santa Monica Clinical Psychologist – Therapy for Anxiety, Trauma & Burnout
        </h1>

        <p className="text-base md:text-lg mb-8 opacity-90">
          I provide a calm, supportive space for high-achieving adults in Santa Monica who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Sessions are structured, collaborative, and tailored to help you feel more balanced and resilient.
        </p>

        <button className="border border-white px-6 py-3 text-sm md:text-base tracking-wide hover:bg-white hover:text-[#223614] transition">
          SCHEDULE A CONSULTATION →
        </button>
      </div>
    </section>
  );
};

export default Hero;
