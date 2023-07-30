import { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { IconContext } from "react-icons";
import ConnectionForm from "../../components/ConnectionForm/СonnectionModal";
import {
  HomeContainer,
  ButtonContainer,
  TextContainer,
  Text,
  LocationText,
  ModalNumber,
  LocationButton,
  ModalSubmitBtn,
} from "./HomePage.styled";

import "../../index.css";

import { Container } from "../../App.styled";
import PhoneButton from "../../components/PhoneButton/PhoneButton";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HomeContainer>
      <Container>
        <TextContainer>
          <PhoneButton />
          <Text>Медична освіта</Text>
          <Text>Досвід 10+ років</Text>
          <Text>Симбіоз технік та методик</Text>
          <Text>Працюю для вашого здоров'я</Text>
          <LocationButton
            href="https://goo.gl/maps/o3qvsXRkfv8h3hdw5"
            target="_blank"
          >
            <IconContext.Provider
              value={{
                size: "18px",
                color: "#fff",
              }}
            >
              <SlLocationPin />
            </IconContext.Provider>
            <LocationText>пр.Перемоги, 121а, м.Київ</LocationText>
          </LocationButton>
          <ModalNumber href="tel:+380966193616">+38 (093) 619 3616</ModalNumber>
          <ButtonContainer>
            <ModalSubmitBtn onClick={() => setIsModalOpen(true)}>
              Записатись
            </ModalSubmitBtn>
          </ButtonContainer>
        </TextContainer>
        {isModalOpen && (
          <ConnectionForm isOpen={isModalOpen} onClose={onCloseModal} />
        )}
      </Container>
    </HomeContainer>
  );
};

export default HomePage;
