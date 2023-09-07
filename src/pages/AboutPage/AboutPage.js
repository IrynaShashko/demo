import photo from "../../images/photo.jpg";
import experience from "../../experience.json";
import Contacts from "../../components/Contacts/Contacts";
import {
  AboutContainer,
  StudyContainer,
  Image,
  ImageContainer,
  TitleContainer,
  ItemTitle,
  Title,
  AfterTitle,
  ItemText,
  DataTitle,
  TitleText,
} from "../AboutPage/AboutPage.styled";
import { Container } from "../../App.styled";

const AboutPage = () => {
  const studyItems = experience.study.map((item) => (
    <li key={item.id}>
      <ItemText>
        <DataTitle>{item.data}</DataTitle> {item.type}
      </ItemText>
    </li>
  ));

  const experienceItems = experience.experience.map((item) => (
    <li key={item.id}>
      <ItemText>
        <DataTitle>{item.data}</DataTitle> {item.type}
      </ItemText>
    </li>
  ));

  const elseItems = experience.else.map((item) => (
    <li key={item.id}>
      <ItemText>{item.type}</ItemText>
    </li>
  ));

  return (
    <>
      <AboutContainer>
        <StudyContainer>
          <ImageContainer>
            <Image src={photo} alt="masseur" />
            <TitleContainer>
              <Title>Марія Глушенко</Title>
              <AfterTitle>Масажист / реабілітолог</AfterTitle>
            </TitleContainer>
          </ImageContainer>
          <Container>
            <TitleText
              style={{ textAlign: "center", textIndent: "0", fontSize: "18px", textTransform: "uppercase", marginBottom: "20px" }}
            >
              Ласкаво просимо до нашого спокійного оазису масажу!
            </TitleText>
            <TitleText>
              Мене звати Марія Глушенко, і я є сертифікованим фахівцем з
              багаторічним досвідом. Моя мета - не просто зняти фізичний
              дискомфорт, а й створити глибокий зв'язок між вашим тілом та
              розумом. Масаж - це не тільки про розслаблення м'язів, а й про
              відновлення внутрішньої гармонії.
            </TitleText>
            <TitleText>
              У своїй роботі я використовую натуральні олії та аромати, які
              підсилюють ефект масажу і допомагають вам зануритися у атмосферу
              спокою та розслаблення.
            </TitleText>
            <TitleText>
              Запрошую вас на сесію масажу, де вас оточить увага, турбота та
              професійний підхід. Дозвольте собі на мить відірватися від
              щоденних турбот та дати своєму тілу заслужений відпочинок.
              Запишіться на сеанс масажу вже сьогодні, і дозвольте собі відчути
              справжнє блаженство і відновлення.
            </TitleText>
            <ItemTitle>Освіта:</ItemTitle>
            <ul>{studyItems}</ul>
          </Container>
        </StudyContainer>
        <Container>
          <ItemTitle>Досвід:</ItemTitle>
          <ul>{experienceItems}</ul>
          <ItemTitle>Додаткові навички:</ItemTitle>
          <ul>{elseItems}</ul>
        </Container>
      </AboutContainer>
      <Contacts />
    </>
  );
};

export default AboutPage;
