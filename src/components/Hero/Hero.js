import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconContext } from "react-icons";
import { GiCheckMark } from "react-icons/gi";
import ConnectionForm from "../ConnectionForm/СonnectionModal";
import PhoneButton from "../PhoneButton/PhoneButton";
import {
  TextContainer,
  AnimationDiv,
  Text,
  ButtonContainer,
  ModalSubmitBtn,
} from "./Hero.styled";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const animationElement = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 2, delay: custom * 0.3 },
    }),
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

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
      <PhoneButton />
      <TextContainer
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationElement}
        ref={ref}
        custom={1}
      >
        <AnimationDiv>
          <Text
            variants={animationElement}
            custom={2}
            style={{ letterSpacing: "3px" }}
          >
            Ласкаво прошу у світ, де масаж стає особливою історією!
          </Text>
          <Text variants={animationElement} custom={3}>
            Тут ви зможете:{" "}
          </Text>
          <Text variants={animationElement} custom={4}>
            {mark}відчути гармонію
          </Text>
          <Text variants={animationElement} custom={5}>
            {mark}баланс
          </Text>
          <Text variants={animationElement} custom={6}>
            {mark}позбутися стресу та напруги
          </Text>
          <Text variants={animationElement} custom={7}>
            {mark}втамувати біль
          </Text>
          <Text variants={animationElement} custom={8}>
            {mark}відновити або покращити функцію опорно-рухового апарату
          </Text>
        </AnimationDiv>
        <ButtonContainer>
          <motion.div
            variants={animationElement}
            custom={9}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <ModalSubmitBtn onClick={() => setIsModalOpen(true)}>
              Записатись
            </ModalSubmitBtn>
          </motion.div>
        </ButtonContainer>
      </TextContainer>
      {isModalOpen && (
        <ConnectionForm isOpen={isModalOpen} onClose={onCloseModal} />
      )}
    </>
  );
};

export default Hero;
