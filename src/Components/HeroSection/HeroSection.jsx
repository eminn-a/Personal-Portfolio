export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Emin</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section--description">
            My goal is finding a job and kickstarting my career
            <br />
            to provide value through my coding expertise.
          </p>
        </div>
        <button className="btn btn-primary">Get in touch!</button>
      </div>
      <div className="hero--section--img">
        <img src="img/hero-img-transformed.jpeg" alt="Hero Section Image" />
      </div>
    </section>
  );
}
