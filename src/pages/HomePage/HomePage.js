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
              Ласкаво просимо у світ розслаблення та відновлення гармонії! З
              понад десятирічним досвідом роботи в сфері масажу, я з радістю
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
          {/* <MainText>
            Ласкаво просимо у світ розслаблення та відновлення гармонії! З понад
            десятирічним досвідом роботи в сфері масажу, я з радістю пропоную
            вам унікальний досвід справжнього релаксу та відновлення енергії.
             Моя мета - не просто зняти фізичний дискомфорт, а й
            створити глибокий зв'язок між вашим тілом та розумом. Разом з вами,
            ми зосередимося на відновленні балансу, забезпечуючи гармонію як для
            вашого фізичного, так і для емоційного стану. Масаж - це не тільки
            про розслаблення м'язів, а й про відновлення внутрішньої гармонії. У
            своїй роботі я використовую натуральні олії та аромати, які
            підсилюють ефект масажу і допомагають вам зануритися у атмосферу
            спокою та розслаблення. Моя мета - створити незабутній досвід, який
            допоможе вам відновити втрачену енергію та відчути глибоку гармонію
            зі своїм тілом. Запрошую вас на сесію масажу, де вас оточить увага,
            турбота та професійний підхід. Дозвольте собі на мить відірватися
            від щоденних турбот та дати своєму тілу заслужений відпочинок. Разом
            ми зможемо знайти ту гармонію, яку ви шукаєте.
          </MainText> */}
        </Container>
      </InfoDiv>
      <Contacts />
    </>
  );
};

export default HomePage;
