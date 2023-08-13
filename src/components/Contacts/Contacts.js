import { IconContext } from "react-icons";
import { SlLocationPin } from "react-icons/sl";
import { Container } from "../../App.styled";
import ConnectionButtons from "../ConnectionButton/ConnectionButton";
import {
  ContactsContainer,
  Title,
  ContactsLinkContainer,
  ContactsLink,
} from "../../components/Contacts/Contacts.styled";

const Contacts = () => {
  return (
    <ContactsContainer id="contacts">
      <Container>
        <Title>Контактна інформація:</Title>
        <ContactsLinkContainer>
          <ContactsLink>
            <IconContext.Provider
              value={{
                size: "15px",
                color: "#fff",
              }}
            >
              <SlLocationPin />
            </IconContext.Provider>
            Київ, проспект Перемоги, 121а.
          </ContactsLink>
        </ContactsLinkContainer>
        <ConnectionButtons background={"#fff"} color={"#696969"} />
      </Container>
    </ContactsContainer>
  );
};

export default Contacts;
