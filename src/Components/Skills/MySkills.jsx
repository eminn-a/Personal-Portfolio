import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section id="mySkills" className="skills--section">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Experties</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              {item.description.map((x, index) => (
                <p className="skills--section--description" key={index}>
                  {x}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
