import { Link } from "react-scroll";
import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer--container">
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">
          All rights reserved © 2023 Emin Apturaim
        </p>
        <div className="social--container">
          <a href="https://github.com/eminn-a" target="_blank">
            <div className="social-icon-box">
              <FaGithub className="social-icon" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/emin-apturaim-a1b045292/"
            target="_blank"
          >
            <div className="social-icon-box">
              <FaLinkedin className="social-icon" />
            </div>
          </a>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
