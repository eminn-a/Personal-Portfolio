import AboutMe from "../Components/AboutMe/AboutMe";
import HeroSection from "../Components/HeroSection/HeroSection";
import MySkills from "../Components/Skills/MySkills";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MySkills />;
      <AboutMe />
    </>
  );
}
