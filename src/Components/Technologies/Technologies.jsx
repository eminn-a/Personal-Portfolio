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

import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default function Technologies() {
  return (
    <section className={styles.technologiesSection} id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Technologies</h2>
      </div>
      <div className={styles.iconContainer}>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className={styles.iconBox}
        >
          <FaHtml5 className={styles.icon} style={{ color: "#e14e1d" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className={styles.iconBox}
        >
          <FaCss3Alt className={styles.icon} style={{ color: "#0277bd" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className={styles.iconBox}
        >
          <SiJavascript className={styles.icon} style={{ color: "#f7e018" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(3.3)}
          initial="initial"
          animate="animate"
          className={styles.iconBox}
        >
          <SiTypescript className={styles.icon} style={{ color: "#0277bd" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(3.7)}
          initial="initial"
          animate="animate"
          className={styles.iconBox}
        >
          <RiReactjsLine className={styles.icon} style={{ color: "#61dafb" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(4.2)}
          initial="initial"
          animate="animate"
          className={styles.iconBox}
        >
          <FaAngular className={styles.icon} style={{ color: "#c50836" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(4.3)}
          initial="initial"
          animate="animate"
          className={styles.iconBox}
        >
          <IoLogoNodejs className={styles.icon} style={{ color: "#7cb700" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(3.9)}
          initial="initial"
          animate="animate"
          className={styles.iconBox}
        >
          <SiExpress className={styles.icon} />
        </motion.div>
        <motion.div
          variants={iconVariants(3.4)}
          initial="initial"
          animate="animate"
          className={styles.iconBox}
        >
          <SiMongodb className={styles.icon} style={{ color: "green" }} />
        </motion.div>
      </div>
    </section>
  );
}
