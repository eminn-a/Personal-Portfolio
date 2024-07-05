export default function AboutMe() {
  return (
    <section id="aboutMe" className="about--section">
      <div className="about--section--img">
        <img src="img/about-me-img.jpg" alt="About Me img" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero--section--description">
            I'm Emin, a passionate programmer currently following the JavaScript
            curriculum at SoftUni University, which includes various modules
            from Basic to more Advanced concepts in the language. Over the past
            year, I have dedicated myself to honing my technical skills and
            expanding my knowledge in JavaScript, React, Node.js, MongoDB, and
            other cutting-edge technologies.
          </p>
          <p className="hero--section--description">
            I'm not just into coding, I'm also a sports enthusiast! I'm always
            open to new opportunities to expand my skill set.
          </p>
          <div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">Name</h3>
                <p className="text-md">Emin Apturaim</p>
              </div>
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">Gmail</h3>
                <p className="text-md">eminapturaim@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
