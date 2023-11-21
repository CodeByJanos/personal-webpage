import { Container } from "./styles";
import gmail from "../../assets/gmail.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
      </header>
      <div className="contacts">
        <div>
        <a href="janos.balogh870@gmail.com"><img src={gmail} alt="Email" /></a> 
          <a href="mailto:janos.balogh870@gmail.com">janos.balogh870@gmail.com</a>
        </div>
        <div>
        <a href="tel:+36501345572"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+36501345572">(+36) 501345572</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}