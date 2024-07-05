import Typewriter from "typewriter-effect";

export default function HeroSection() {
  const goToPage = () => {
    window.open(
      "https://www.linkedin.com/in/emin-apturaim-a1b045292/",
      "_blank" // <- This is what makes it open in a new window.
    );
  };
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Emin</p>
          <h1 className="hero--section--title">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Front-End Developer")
                  .pauseFor(9000)
                  .deleteAll()
                  .start();
              }}
              options={{
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="hero--section--description">
            My goal is finding a job and kickstarting my career to provide value
            through my coding expertise.
          </p>
        </div>
        <button className="btn btn-primary" onClick={goToPage}>
          Get in touch
        </button>
      </div>
      <div className="hero--section--img">
        <img src="img/hero-img-transformed.jpeg" alt="Hero Section Image" />
      </div>
    </section>
  );
}
