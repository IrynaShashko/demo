import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
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
  const animationTitle = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: custom => ({
      opacity: 1,
      scale: 1,
      transition: { ease: "easeOut", duration: 2, delay: custom * 0.3 },
    }),
  }
  const animationElement = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 2, delay: custom * 0.3 },
    }),
  }

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

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
      <ItemText style={{ textIndent: "0px" }}>{item.type}</ItemText>
    </li>
  ));

  return (
    <>
      <AboutContainer>
        <StudyContainer>
          <ImageContainer>
            <Image variants={animationTitle} custom={2} src={photo} alt="masseur" />
            <TitleContainer initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationTitle}
              ref={ref}
              custom={1}>
              <Title variants={animationTitle} custom={3}>Марія Глушенко</Title>
              <AfterTitle variants={animationTitle} custom={3}>Масажист / реабілітолог</AfterTitle>
            </TitleContainer>
          </ImageContainer>
          <Container>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationElement}
              ref={ref}
              custom={1}>
              <TitleText
                variants={animationElement} custom={2}
                style={{ textAlign: "center", textIndent: "0", fontSize: "18px", textTransform: "uppercase", marginBottom: "20px", letterSpacing: "5px" }}
              >
                Ласкаво просимо до нашого спокійного оазису масажу!
              </TitleText>
              <TitleText variants={animationElement} custom={3}>
                Мене звати Марія Глушенко, і я є сертифікованим фахівцем з
                багаторічним досвідом. Моя мета - не просто зняти фізичний
                дискомфорт, а й створити глибокий зв'язок між вашим тілом та
                розумом. Масаж - це не тільки про розслаблення м'язів, а й про
                відновлення внутрішньої гармонії.
              </TitleText>
              <TitleText variants={animationElement} custom={4}>
                У своїй роботі я використовую натуральні олії та аромати, які
                підсилюють ефект масажу і допомагають вам зануритися у атмосферу
                спокою та розслаблення.
              </TitleText>
              <TitleText variants={animationElement} custom={5}>
                Запрошую вас на сесію масажу, де вас оточить увага, турбота та
                професійний підхід. Дозвольте собі на мить відірватися від
                щоденних турбот та дати своєму тілу заслужений відпочинок.
                Запишіться на сеанс масажу вже сьогодні, і дозвольте собі відчути
                справжнє блаженство і відновлення.
              </TitleText>
            </motion.div>
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
