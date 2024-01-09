import AboutMe from "../Components/AboutMe/AboutMe";
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
    </>
  );
}
