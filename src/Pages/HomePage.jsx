import AboutMe from "../Components/AboutMe/AboutMe";
import ContactMe from "../Components/ContactMe/ContactMe";
import Footer from "../Components/Footer/Footer";
import HeroSection from "../Components/HeroSection/HeroSection";
import MyPortfolio from "../Components/MyPortfolio/MyPortfolio";
import MySkills from "../Components/Skills/MySkills";
import Testimonials from "../Components/Testimonials/Testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MySkills />;
      <AboutMe />
      <MyPortfolio />
      <Testimonials />
      <ContactMe />
      <Footer />
    </>
  );
}
