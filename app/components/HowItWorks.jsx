const steps = [
  {
    step: "01",
    title: "Book a Session",
    desc: "Choose a convenient time and book your session easily through our online scheduling system.",
  },
  {
    step: "02",
    title: "Meet Your Therapist",
    desc: "A safe, confidential space where you can openly share your concerns without judgment.",
  },
  {
    step: "03",
    title: "Begin Your Healing",
    desc: "Work collaboratively on goals using personalized, evidence-based therapeutic approaches.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-[#ffff]"
     style={{
        backgroundImage:
          "url('https://wp.salesforce.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-products-bg.png?resize=2048,625')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="flex flex-col items-center max-w-2xl mb-16 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-[#223614] mb-6">
            How Therapy Works
          </h2>
          <p className="text-lg text-[#4b5f55]">
            A simple, transparent process designed to help you feel supported
            from the very first step.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              
              {/* Number */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#dfe9e3] text-[#223614] font-semibold mb-6">
                {item.step}
              </div>

              <h3 className="text-xl font-medium text-[#223614] mb-4">
                {item.title}
              </h3>

              <p className="text-[#4b5f55] leading-relaxed mb-24">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
