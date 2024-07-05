import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };
  const closeMenu = () => {
    setNavActive(false);
  };

  const sendMail = () => {
    window.open("mailto:eminapturaim@gmail.com");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.addEventListener("resie", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <Link
        onClick={closeMenu}
        activeClass="navBar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="heroSection"
        className="navbar--content"
      >
        <div className="site-logo">emin app</div>
      </Link>

      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navBar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navBar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="aboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navBar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="mySkills"
              className="navbar--content"
            >
              My Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navBar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="myPortfolio"
              className="navbar--content"
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
      <Link
        onClick={sendMail}
        activeClass="navBar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="contactMe"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;
