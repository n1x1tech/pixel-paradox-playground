import Hero from "@/components/Hero";
import ArtGallery from "@/components/ArtGallery";
import SurveySection from "@/components/SurveySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ArtGallery />
      <SurveySection />
      <Footer />
    </div>
  );
};

export default Index;
