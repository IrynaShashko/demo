import { Container } from "../../App.styled";
import ConnectionButtons from "../ConnectionButton/ConnectionButton";
import {
  ContactsContainer,
  GridContainer,
  Grid1,
  Grid2,
  Title,
  Location,
} from "../../components/Contacts/Contacts.styled";

const Contacts = () => {
  return (
    <ContactsContainer id="contacts">
      <Container>
        <GridContainer>
          <Grid1>
            <Title>Контактна інформація:</Title>
            <ConnectionButtons background={"#fff"} color={"#696969"} />
          </Grid1>
          <Grid2>
            <Location
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.273356384819!2d30.35803687630494!3d50.4546341870629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc9a797be691%3A0x6529cfbd9c11e34!2zMTIx0JAsINC_0YDQvtGB0L_QtdC60YIg0J_QtdGA0LXQvNC-0LPQuCwgMTE10JAsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1692952327783!5m2!1suk!2sua"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></Location>
          </Grid2>
        </GridContainer>
      </Container>
    </ContactsContainer>
  );
};

export default Contacts;
