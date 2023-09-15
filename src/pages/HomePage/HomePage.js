import Contacts from "../../components/Contacts/Contacts";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import {
  HomeContainer,
  InfoDiv
} from "./HomePage.styled";

import "../../index.css";

import { Container } from "../../App.styled";

const HomePage = () => {


  return (
    <>
      <HomeContainer>
        <Container>
          <Hero />
        </Container>
      </HomeContainer>
      <InfoDiv>
        <Container>
          <About />
        </Container>
      </InfoDiv>
      <Contacts />
    </>
  );
};

export default HomePage;
