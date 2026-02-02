import Hero from "./components/Hero";
import AboutMaya from "./components/AboutMaya";
import AreasOfFocus from "./components/AreasOfFocus";
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
      <HowItWorks />
      <Testimonial />
      <CTASection />
      <Footer />

    </main>
  );
}
