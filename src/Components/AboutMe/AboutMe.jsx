export default function AboutMe() {
  return (
    <section className="about--section">
      <div id="aboutMe" className="about--section--img">
        <img src="img/about-me-img.jpg" alt="About Me img" />
      </div>
      <div
        id="aboutMe"
        className="hero--section--content--box about--section--box"
      >
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero--section--description">
            I am Emin, a passionate programmer with a comprehensive background
            in JavaScript, having completed the rigorous curriculum at SoftUni
            University. Over the past year, I have dedicated myself to honing my
            technical skills and expanding my knowledge in JavaScript, React,
            Angular, Node.js, MongoDB, and other cutting-edge technologies. I am
            currently engaged in the Tech Lead Academy 2 internship, where I am
            applying my skills to real-world projects and gaining invaluable
            industry experience.
          </p>
          <p className="hero--section--description">
            I'm not just into coding, I'm also a sports enthusiast! I'm always
            open to new opportunities to expand my skill set.
          </p>
          <div className="portfolio--personal--info">
            <div className="portfolio--section--card--content">
              <div className="portfolio--innner">
                <h3>Name</h3>
                <p className="text-lg">Emin Apturaim</p>
              </div>
            </div>
            <div className="portfolio--section--card--content">
              <div className="portfolio--innner">
                <h3>Gmail</h3>
                <p className="text-lg">eminapturaim@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
