import CustomCursor from "../components/CustomCursor";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ToolsMarquee from "../components/ToolsMarquee";
import WorkSection from "../components/WorkSection";
import ProcessSection from "../components/ProcessSection";
import AboutSection from "../components/AboutSection";
import BlogSection from "../components/BlogSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import PersistentCTA from "../components/PersistentCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" style={{ cursor: 'none' }}>
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <ToolsMarquee />
      <WorkSection />
      <ProcessSection />
      <AboutSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <PersistentCTA />
    </div>
  );
}