import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { data } from "./data";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      {/* <div className="alert alert-warning" role="alert">
        Currently no project available!
      </div> */}
      <ScrollAnimation className="projects" animateIn="flipInX">
        {data.map((project, index) => (
          <a
            href="https://mern-auth-42kq.onrender.com"
            target="_blank"
            rel="noreferrer"
            key={index}
            className="project-link"
          >
            <div className="project-card">
              <div className="project-description">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <video width="550" height="200" autoPlay loop muted>
                <source src={project.video} type="video/mp4" />
              </video>
            </div>
          </a>
        ))}
      </ScrollAnimation>
    </Container>
  );
}
