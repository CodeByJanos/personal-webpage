import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
// import whatsapp from '../../assets/whatsapp.svg'
import instagramIcon from "../../assets/instagram.svg";
// import discordIcon from '../../assets/discord.png'
import facebookIcon from "../../assets/facebook.svg";
import logo from "../../assets/jb_logo.png"

export function Footer() {
  return (
    <Container className="footer">
      <a href="www.janosbalogh.me" className="logo">
        <img src={logo} alt="webicon" />
        <span>www.janosbalogh-dev.me</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.facebook.com/janos.balogh.5205"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebookIcon} alt="facebook" />
        </a>
        <a
          href="https://www.linkedin.com/in/janos-balogh-412657257/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a href="https://github.com/janos870" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        {/* <a
          href="https://web.whatsapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a> */}
        <a
          href="https://www.instagram.com/janosbalogh87/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  );
}
