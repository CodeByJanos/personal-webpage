import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { data } from "./data";
import { useTranslate } from "../../i18n";
import { useLanguage } from "../../context/LanguageContext";
import { FaCode, FaLock, FaMapMarkedAlt } from "react-icons/fa";

export function Project() {
  const { language } = useLanguage();
  const translate = useTranslate();

  const icons = [FaLock, FaCode, FaMapMarkedAlt];

  return (
    <Container id="project">
      <h2>{translate("project.title")}</h2>
      <h3 className="project-intro">{translate("project.intro")}</h3>
      <ScrollAnimation className="projects" animateIn="zoomIn">
        {data.map((project, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div className="project-card" key={index}>
              <div className="project-icon">
                <Icon size={40} />
              </div>
              <img src={project.img} alt={project.name[language]} />
              <div className="project-description">
                <h3>{project.name[language]}</h3>
                <p>{project.description[language]}</p>
              </div>
            </div>
          );
        })}
      </ScrollAnimation>
    </Container>
  );
}

