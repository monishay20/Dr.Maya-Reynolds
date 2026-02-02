import Image from "next/image";

const officeImages = ["/office1.jpeg", "/office2.jpeg"];

const OurOffice = () => {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{
        backgroundImage: "url('https://tse2.mm.bing.net/th/id/OIP.IGyVL9rGvuCgoX6zVLV9SQHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/35 backdrop-blur-xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — Office Information */}
        <div className="text-[#223614] max-w-lg">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">Our Office</h2>

          <p className="text-lg text-[#4b5f55] mb-4">
            My Santa Monica office is a quiet, private space designed to feel
            calm, grounding, and uncluttered—so you can settle in and feel
            supported from the moment you arrive.
          </p>

          <p className="text-lg text-[#4b5f55] mb-4">
            The space is filled with natural light and intentionally designed to
            help clients feel safe, comfortable, and at ease during sessions.
          </p>

          <p className="text-base text-[#4b5f55] mb-6">
            <strong>Office Location:</strong>
            <br />
            123th Street 45 W, Santa Monica, CA 90401
          </p>

          <p className="text-base text-[#4b5f55] mb-8">
            In-person sessions are available at the office, with secure
            telehealth options offered to clients across California.
          </p>

          <button className="inline-flex items-center border border-[#223614] px-7 py-3 rounded-full text-sm md:text-base tracking-wide hover:bg-[#223614] hover:text-[#fbf8f5] transition focus:ring-4 focus:ring-[#223614]/30">
            Schedule a Session →
          </button>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center items-center h-[420px]">
          {/* 1st frame */}
          <div
            className="absolute w-80 h-80 md:w-100 md:h-100
               rotate-[40deg] -translate-x-35 -translate-y-4
               rounded-3xl overflow-hidden shadow-2xl z-20"
          >
            {/* Straight image */}
            <div className="relative w-full h-full rotate-[-30deg] scale-[1.35]">
              <Image
                src={officeImages[0]}
                alt="Therapy office interior"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* 2nd frame */}
          <div
            className="absolute w-80 h-80 md:w-100 md:h-100
               rotate-[-45deg] translate-x-35 translate-y-0
               rounded-3xl overflow-hidden shadow-xl z-10"
          >
            {/* Straight image */}
            <div className="relative w-full h-full rotate-[25deg] scale-[1.35]">
              <Image
                src={officeImages[1]}
                alt="Calm counseling space"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffice;
