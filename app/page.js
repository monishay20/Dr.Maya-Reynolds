import Hero from "./components/Hero";
import AboutMaya from "./components/AboutMaya";
import AreasOfFocus from "./components/AreasOfFocus";
import FAQs from "./components/FAQs";
import OurOffice from "./components/OurOffice";
import HowItWorks from "./components/HowItWorks";
import Testimonial from "./components/Testimonial";
import CTASection from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <AboutMaya />
      <AreasOfFocus />
      <FAQs />
      <OurOffice />
      <HowItWorks />
      <Testimonial />
      <CTASection />
      <Footer />

    </main>
  );
}
