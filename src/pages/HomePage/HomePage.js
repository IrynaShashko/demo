import { useState } from "react";

import photo1 from "../../images/10.jpg";
import photo2 from "../../images/11.jpg";
import { SlLocationPin } from "react-icons/sl";
import { IconContext } from "react-icons";
import ConnectionForm from "../../components/ConnectionForm/СonnectionModal";
import {
  Container,
  Div,
  ButtonContainer,
  TextContainer,
  Text,
  ImageContainer,
  ImageLeft,
  ImageRight,
  LocationText,
} from "./HomePage.styled";

import {
  ModalText,
  ModalSubmitBtn,
  LocationButton,
} from "../../components/Modal/Modal.styled";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <TextContainer>
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
              size: "25px",
              color: "#007586",
            }}
          >
            <SlLocationPin />
          </IconContext.Provider>
          <LocationText>пр.Перемоги, 121а, м.Київ</LocationText>
        </LocationButton>
        <ModalText href="tel:+380966193616">+38 (093) 619 3616</ModalText>
      </TextContainer>
      <Div>
        <ImageContainer>
          <ImageLeft src={photo1} alt="massage" />
          <ImageRight src={photo2} alt="massage" />
        </ImageContainer>
        <ButtonContainer>
          <ModalSubmitBtn onClick={() => setIsModalOpen(true)}>
            Записатись
          </ModalSubmitBtn>
        </ButtonContainer>
      </Div>
      {isModalOpen && (
        <ConnectionForm isOpen={isModalOpen} onClose={onCloseModal} />
      )}
    </Container>
  );
};

export default HomePage;
