import SingleProject from "./SingleProject";
import styles from "./ProjectsStyles.module.css";

const Projects = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.trip} id="myPortfolio">
      <h1>Recent projects</h1>
      <p>My Portfolio</p>
      <div className={styles.tripCardContainer}>
        {data.map((x, index) => (
          <SingleProject {...x} key={x.id} count={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
