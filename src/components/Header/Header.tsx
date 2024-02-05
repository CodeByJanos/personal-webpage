import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";
import cv  from "../../assets/cv_hu_janosbalogh.pdf";


export function Header() {
  const [isActive, setActive] = useState(false);
  const [isLightTheme, setLightTheme] = useState(
    localStorage.getItem("isLightTheme") === "true"
  );

  function toggleTheme() {
    setLightTheme((prevTheme) => !prevTheme);
  }
  
  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light", isLightTheme);
    localStorage.setItem("isLightTheme", isLightTheme.toString());
  }, [isLightTheme]);

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>Janos</span>
          <span>Balogh</span>
        </HashLink>

        <input
          checked={isLightTheme}
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>

        <nav className={isActive ? "active" : ""}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Project
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          <a href={cv} download className="buttonx`">
            CV
          </a>
        </nav>

        <div
          aria-expanded={isActive ? "true" : "false"}
          aria-haspopup="true"
          aria-label={isActive ? "Fechar menu" : "Abrir menu"}
          className={isActive ? "menu active" : "menu"}
          onClick={() => {
            setActive(!isActive);
          }}
        ></div>
      </Router>
    </Container>
  );
}
