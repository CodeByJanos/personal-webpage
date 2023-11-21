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
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          {data.map((project, index) => (
            <a
              href="https://mern-auth-42kq.onrender.com"
              target="_blank"
              rel="noreferrer"
              key={index}
              className="video-link"
            >
              <div className="video-container">
                <div className="video-description">
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                </div>
                <video width="560" height="315" autoPlay loop muted>
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </a>
          ))}
        </ScrollAnimation>
      </div>
    </Container>
  );
}
