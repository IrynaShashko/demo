import { Container } from "../../App.styled";
import ConnectionButtons from "../ConnectionButton/ConnectionButton";
import {
  ContactsContainer,
  Title,
} from "../../components/Contacts/Contacts.styled";

const Contacts = () => {
  return (
    <ContactsContainer id="contacts">
      <Container>
        <Title>Контактна інформація:</Title>
        <ConnectionButtons background={"#fff"} color={"#696969"} />
      </Container>
    </ContactsContainer>
  );
};

export default Contacts;
