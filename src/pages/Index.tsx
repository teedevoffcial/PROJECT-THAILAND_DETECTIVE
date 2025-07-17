
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SpecialServices from "@/components/SpecialServices";
import WorkTypes from "@/components/WorkTypes";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import YouTubeSection from "@/components/YoutubeSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <Services />
      <SpecialServices />
      <WorkTypes />
      <YouTubeSection/>
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
