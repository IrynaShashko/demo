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
        <ConnectionButtons background={"#fff"} color={"#696969"} />
      </Container>
    </ContactsContainer>
  );
};

export default Contacts;
