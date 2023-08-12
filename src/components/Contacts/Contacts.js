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
          <ContactsLink>Київ, проспект Перемоги, 121а.</ContactsLink>
          <ContactsLink>+38 (096) 619 3616</ContactsLink>
        </ContactsLinkContainer>
        <ConnectionButtons background={"#fff"} color={"#696969"} />
      </Container>
    </ContactsContainer>
  );
};

export default Contacts;
