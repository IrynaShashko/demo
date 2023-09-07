import { useState } from "react";
import { IconContext } from "react-icons";
import { GiCheckMark } from "react-icons/gi";
import ConnectionForm from "../../components/ConnectionForm/СonnectionModal";
import Contacts from "../../components/Contacts/Contacts";
import {
  HomeContainer,
  ButtonContainer,
  TextContainer,
  Text,
  ModalSubmitBtn,
  InfoContainer,
  InfoItem,
  SvgContainer,
  Icon,
  InfoTitle,
  MainText,
  Title,
  InfoDiv, AnimationDiv
} from "./HomePage.styled";

import "../../index.css";
import icon1 from "../../icons/massage-spa-body-treatment-svgrepo-com.svg";
import icon2 from "../../icons/spa-svgrepo-com.svg";
import icon3 from "../../icons/aromatherapy-svgrepo-com.svg";
import { Container } from "../../App.styled";
import PhoneButton from "../../components/PhoneButton/PhoneButton";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const mark = (
    <IconContext.Provider
      value={{
        size: "20px",
        color: "#007586",
      }}
    >
      <GiCheckMark />
    </IconContext.Provider>
  );

  return (
    <>
      <HomeContainer>
        <Container>
          <TextContainer>
            <PhoneButton />
            <AnimationDiv><Text style={{ letterSpacing: "5px", textTransform: "uppercase" }}>
              Ласкаво прошу у світ, де масаж стає особливою історією! </Text >
              <Text>Тут ви зможете: </Text>
              <Text>
                {mark}відчути гармонію
              </Text><Text>
                {mark}баланс
              </Text><Text>
                {mark}позбутися стресу та напруги
              </Text><Text>
                {mark}втамувати біль
              </Text><Text>
                {mark}відновити або покращити функцію опорно-рухового апарату</Text></AnimationDiv>
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
      <InfoDiv>
        <Container>
          <Title>Чому обирають мене?</Title>
          <InfoContainer>
            <InfoItem>
              <SvgContainer>
                <Icon src={icon2} alt="icon" />
              </SvgContainer>
              <InfoTitle>Більше ніж послуга</InfoTitle>
              <MainText>
                Кожен клієнт, який потрапив до мене на масажний стіл, несе свою
                історію, яку розповідає тіло. Ваша довіра - моя найбільша
                нагорода, моя відданість. Ваша рекомендація друзям, рідним,
                близьким людям дарує відчуття, що я на своєму місці.
              </MainText>
            </InfoItem>
            <InfoItem>
              <SvgContainer>
                <Icon src={icon1} alt="icon" />
              </SvgContainer>
              <InfoTitle>Медична освіта і досвід більше 10 років</InfoTitle>
              <MainText>
                Мій підхід до масажу - це справжній симбіоз різноманітних технік
                та методик, які я вдосконалювала протягом багатьох років. Кожна
                сесія - це унікальна подорож, де я поєдную різні прийоми для
                досягнення максимального результату. Від класичного масажу до
                глибокотканного, від релаксуючих аромамасажів до точкового
                впливу на активні точки, акупресурою та сухою голкою - моя
                задача підібрати те, що тут і зараз відповідає вашим потребам та
                здоров'ю вашого тіла.
              </MainText>
            </InfoItem>
            <InfoItem>
              <SvgContainer>
                <Icon src={icon3} alt="icon" />
              </SvgContainer>
              <InfoTitle>Авторські методики</InfoTitle>
              <MainText>
                Використовуючи різноманітні масажні техніки, я створюю витончену
                симфонію роботи з вашим тілом, що відновить баланс фізичного і
                духовного стану. Кожний сеанс неповторний, кожний рух наповнить
                з середини.
              </MainText>
            </InfoItem>
          </InfoContainer>
        </Container>
      </InfoDiv>
      <Contacts />
    </>
  );
};

export default HomePage;
