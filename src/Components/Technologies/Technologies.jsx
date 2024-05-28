import styles from "./Technologies.module.css";

import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

export default function Technologies() {
  return (
    <section className={styles.technologiesSection} id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Technologies</h2>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.iconBox}>
          <FaHtml5 className={styles.icon} style={{ color: "#e14e1d" }} />
        </div>
        <div className={styles.iconBox}>
          <FaCss3Alt className={styles.icon} style={{ color: "#0277bd" }} />
        </div>
        <div className={styles.iconBox}>
          <SiJavascript className={styles.icon} style={{ color: "#f7e018" }} />
        </div>
        <div className={styles.iconBox}>
          <SiTypescript className={styles.icon} style={{ color: "#0277bd" }} />
        </div>
        <div className={styles.iconBox}>
          <RiReactjsLine className={styles.icon} style={{ color: "#61dafb" }} />
        </div>
        <div className={styles.iconBox}>
          <FaAngular className={styles.icon} style={{ color: "#c50836" }} />
        </div>
        <div className={styles.iconBox}>
          <IoLogoNodejs className={styles.icon} style={{ color: "#7cb700" }} />
        </div>
        <div className={styles.iconBox}>
          <SiExpress className={styles.icon} />
        </div>
        <div className={styles.iconBox}>
          <SiMongodb className={styles.icon} style={{ color: "green" }} />
        </div>
      </div>
    </section>
  );
}
