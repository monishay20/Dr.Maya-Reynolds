const CallToAction = () => {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1676197935286-14d7fbb56760?q=80&w=1400&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Glass layer */}
      <div className="absolute inset-0 bg-white/35 backdrop-blur-2xl" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center text-[#223614]">
        <h2 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
          You Don’t Have to Navigate This Alone
        </h2>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-[#2f4439]">
          If you’re feeling overwhelmed, anxious, or stuck, therapy can help you
          find clarity, balance, and relief. Taking the first step is often the
          hardest — but you don’t have to do it alone.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#223614] text-[#fbf8f5] px-8 py-4 text-sm md:text-base rounded-full hover:bg-[#2d4720] transition shadow-md">
            Schedule a Consultation
          </button>

          <button className="border border-[#223614] px-8 py-4 text-sm md:text-base rounded-full hover:bg-[#223614] hover:text-[#fbf8f5] transition">
            Learn More About Therapy
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;


