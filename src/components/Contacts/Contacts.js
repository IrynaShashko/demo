import { LuPhone } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoBold } from "react-icons/pi";
import { IconContext } from "react-icons";
import { Container } from "../../App.styled";
import {
  ContactsContainer,
  Title,
  ContactsLinkContainer,
  ContactsLink,
  IconList,
  IconContainer,
} from "../../components/Contacts/Contacts.styled";

const Contacts = () => {
  return (
    <ContactsContainer>
      <Container>
        <Title>Контакти</Title>
        <ContactsLinkContainer>
          <ContactsLink
            href="https://goo.gl/maps/o3qvsXRkfv8h3hdw5"
            rel="noreferrer"
            target="_blank"
          >
            Київ, проспект Перемоги, 121а.
          </ContactsLink>
          <ContactsLink href="tel:+380936193616">
            +38 (096) 619 3616
          </ContactsLink>
        </ContactsLinkContainer>
        <IconList>
          <IconContainer>
            <IconContext.Provider
              value={{
                size: "25px",
                color: "#696969",
              }}
            >
              <LuPhone />
            </IconContext.Provider>
          </IconContainer>
          <IconContainer>
            <IconContext.Provider
              value={{
                size: "25px",
                color: "#696969",
              }}
            >
              <SlLocationPin />
            </IconContext.Provider>
          </IconContainer>
          <IconContainer>
            <IconContext.Provider
              value={{
                size: "25px",
                color: "#696969",
              }}
            >
              <FaInstagram />
            </IconContext.Provider>
          </IconContainer>
          <IconContainer>
            <IconContext.Provider
              value={{
                size: "25px",
                color: "#696969",
              }}
            >
              <PiTelegramLogoBold />
            </IconContext.Provider>
          </IconContainer>
        </IconList>
      </Container>
    </ContactsContainer>
  );
};

export default Contacts;
