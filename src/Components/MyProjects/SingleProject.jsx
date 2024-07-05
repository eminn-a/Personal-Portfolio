import styles from "./ProjectsStyles.module.css";
import { FaGithub } from "react-icons/fa";
import { PiArrowSquareInBold } from "react-icons/pi";

const SingleProject = ({ src, title, description, count, siteLink, link }) => {
  const flag = Number(count) % 2 === 0 ? true : false;

  return (
    <div className={flag ? styles.tCard : styles.tCardReverse}>
      <div className={styles.tImage}>
        <img src={src} alt="" />
      </div>
      <div className={styles.sTripText}>
        <h1>{title}</h1>
        <p>{description}</p>
        {/* <br /> */}
        <div className={styles.buttons}>
          <a href={siteLink} target="_blank" className={styles.singleBtn}>
            <p>Live Demo</p>
            <div className={styles.icon}>
              <PiArrowSquareInBold />
            </div>
          </a>
          <a href={link} target="_blank" className={styles.singleBtn}>
            <p>Code</p>
            <div className={styles.icon}>
              <FaGithub />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
