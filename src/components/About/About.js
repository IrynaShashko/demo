import { useInView } from 'react-intersection-observer';

import { Title, InfoContainer, InfoItem, InfoTitle, SvgContainer, MainText, Icon } from "./About.styled";

import icon1 from "../../icons/massage-spa-body-treatment-svgrepo-com.svg";
import icon2 from "../../icons/spa-svgrepo-com.svg";
import icon3 from "../../icons/aromatherapy-svgrepo-com.svg";


const About = () => {
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

    return <><Title>Чому обирають мене?</Title>
        <InfoContainer
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationElement}
            ref={ref}
            custom={1}>
            <InfoItem variants={animationElement} custom={2}>
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
            <InfoItem variants={animationElement} custom={3}>
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
            <InfoItem variants={animationElement} custom={4}>
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
        </InfoContainer></>
}

export default About;