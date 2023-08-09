import { useState } from "react";
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
  InfoDiv,
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

  return (
    <>
      <HomeContainer>
        <Container>
          <TextContainer>
            <PhoneButton />
            <Text>
              Ласкаво просимо у світ розслаблення та відновлення гармонії! Я
              пропоную вам унікальний досвід справжнього релаксу та відновлення
              енергії.
            </Text>
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
              <InfoTitle>Клієнти стають друзями</InfoTitle>
              <MainText>
                Кожен мій клієнт стає не просто клієнтом, а другом. Я відчуваю
                велику радість, коли бачу, що мої клієнти довіряють мені своє
                здоров'я та релакс. Їхня довіра - це найкраща нагорода. Це дуже
                важливо для мене знаходити спільну мову з кожним, створювати
                теплу та довірливу атмосферу.
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
                досягнення максимального ефекту. Від класичного масажу до
                глибокого тиску, від релаксуючих аромамасажів до точкового
                впливу на активні точки - я завжди підбираю те, що найкраще
                відповідає вашим потребам та побажанням.
              </MainText>
            </InfoItem>
            <InfoItem>
              <SvgContainer>
                <Icon src={icon3} alt="icon" />
              </SvgContainer>
              <InfoTitle>Авторські методики масажу</InfoTitle>
              <MainText>
                Разом з вами, ми зосередимося на відновленні балансу,
                забезпечуючи гармонію як для вашого фізичного, так і для
                емоційного стану. Використовуючи знання різноманітних масажних
                технік, я створюю витончену симфонію дотиків, яка зніме навіть
                найбільше навантаження вашого тіла.
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
