const testimonials = [
  {
    quote:
      "Working with Dr. Maya has been life-changing. I finally feel understood and supported in a way I never experienced before.",
    name: "A. R.",
    role: "Client",
    image:
      "https://wp.salesforce.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-product-smb_icon-1.jpg?resize=768,433",
  },
  {
    quote:
      "Her approach is gentle yet deeply effective. I’ve learned how to manage my anxiety with confidence and clarity.",
    name: "S. M.",
    role: "Client",
    image:
      "https://wp.salesforce.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-product-smb_icon-2.jpg?resize=768,433",
  },
  {
    quote:
      "This therapy experience felt safe, thoughtful, and empowering. I’m incredibly grateful for the growth I’ve experienced.",
    name: "L. K.",
    role: "Client",
    image:
      "https://wp.salesforce.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-product-smb_icon-3.jpg?resize=768,433",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#fbf8f5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-[#223614] mb-6">
            What Clients Are Saying
          </h2>
          <p className="text-lg text-[#4b5f55]">
            Real experiences from people who took the first step toward healing.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative h-[360px] rounded-3xl overflow-hidden group shadow-md hover:shadow-xl transition"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark and Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#223614]/80 via-[#223614]/40 to-transparent" />

              {/* Content */}
              <div className="relative h-full p-8 flex flex-col justify-between text-[#223614]">
                <p className="text-lg leading-relaxed">
                  “{item.quote}”
                </p>

                <div className="font-medium text-white/80">
                  {item.name}
                  <span className="block text-sm text-white/80">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

