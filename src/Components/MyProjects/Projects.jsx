import SingleProject from "./SingleProject";
import styles from "./ProjectsStyles.module.css";

const Projects = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.trip} id="myPortfolio">
      <p>My Portfolio</p>
      <h1>Recent projects</h1>
      <div className={styles.tripCardContainer}>
        {data.map((x, index) => (
          <SingleProject {...x} key={x.id} count={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
