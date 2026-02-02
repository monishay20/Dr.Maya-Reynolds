const Footer = () => {
  return (
    <footer className="bg-[#fbf8f5] border-t border-[#e2e6e3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-[#223614]">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-medium mb-4">
              Dr. Maya Reynolds, PsyD
            </h3>
            <p className="text-[#4b5f55] max-w-sm">
              Licensed Clinical Psychologist offering therapy for adults in
              Santa Monica, California.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <p className="text-[#4b5f55]">
              123th Street 45 W<br />
              Santa Monica, CA 90401
            </p>
            <p className="mt-2 text-[#4b5f55]">
              In-person & Telehealth (CA)
            </p>
          </div>

          {/* Legal / Note */}
          <div>
            <h4 className="font-medium mb-4">Important Note</h4>
            <p className="text-[#4b5f55] text-sm leading-relaxed">
              This website is for informational purposes only and does not
              constitute medical advice or establish a therapeutic relationship.
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 text-center text-sm text-[#7a8f85]">
          © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
