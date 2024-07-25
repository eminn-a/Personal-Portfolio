import AboutMe from "../Components/AboutMe/AboutMe";
import ContactMe from "../Components/ContactMe/ContactMe";
import Footer from "../Components/Footer/Footer";
import HeroSection from "../Components/HeroSection/HeroSection";
import MyPortfolio from "../Components/MyPortfolio/MyPortfolio";
import Projects from "../Components/MyProjects/Projects";
import MySkills from "../Components/Skills/MySkills";
import Technologies from "../Components/Technologies/Technologies";
import Testimonials from "../Components/Testimonials/Testimonials";
import data from "../data/index.json";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Technologies />
      <Projects data={data.portfolio} />
      <Footer />
    </>
  );
}
