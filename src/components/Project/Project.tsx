import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { data } from "./data";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <h3 className="project-intro">I showcase some of my projects on my website, most of which can be found on my GitHub. If you're curious about my code, visit my GitHub page. By clicking on the projects, you'll be redirected to their respective folders. Check them out; they involve a lot of effort.</h3>
      <ScrollAnimation className="projects" animateIn="flipInX">
        {data.map((project, index) => (
          <a
            href={project.url}           
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
              <img src={project.img} alt="img" />
            </div>
          </a>
        ))}
      </ScrollAnimation>
    </Container>
  );
}
