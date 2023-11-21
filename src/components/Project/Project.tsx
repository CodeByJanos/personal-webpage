import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="alert alert-warning" role="alert">
        Currently no project available!
      </div>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX"></ScrollAnimation>
      </div>
    </Container>
  );
}
