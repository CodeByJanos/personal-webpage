import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { data } from "./data";
import { translate } from "../../i18n";
import { useLanguage } from "../../context/LanguageContext";

export function Project() {
  const { language } = useLanguage();
  return (
    <Container id="project">
      <h2>{translate("project.title")}</h2>
      <h3 className="project-intro">{translate("project.intro")}</h3>
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
              <img src={project.img} alt={project.name[language]} />
              <div className="project-description">
                <h3>{project.name[language]}</h3>
                <p>{project.description[language]}</p>
              </div>
            </div>
          </a>
        ))}
      </ScrollAnimation>
    </Container>
  );
}

