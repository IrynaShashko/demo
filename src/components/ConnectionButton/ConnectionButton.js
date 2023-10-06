import { useInView } from 'react-intersection-observer';
import { IconContext } from "react-icons";
import { LuPhone } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { FaViber } from "react-icons/fa";
import { LiaTelegram } from "react-icons/lia";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  ButtonContainer,
  ButtonsItem,
  Buttons,
  ContactsLinkContainer,
  ContactsLink,
} from "./ConnectionButton.styled";

const ConnectionButtons = ({ background, color }) => {
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

  function openTelegram() {
    window.open("https://t.me/MashaHlushenko");
  }

  function openWhatsApp() {
    window.open("https://api.whatsapp.com/send?phone=380936193616");
  }

  function openViber() {
    window.open("viber://chat?number=+380936193616");
  }

  function openInstagram() {
    window.open(
      "https://instagram.com/maria.glushenko?igshid=MzRlODBiNWFlZA=="
    );
  }

  function makeCall() {
    window.open("tel:+380936193616");
  }

  return (
    <div>
      <ButtonContainer
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationElement}
        ref={ref}
        custom={1}>
        <ButtonsItem
          variants={animationElement} custom={2}
          backgroundColor={background} color={color}>
          <Buttons aria-label="Open instagram" href="https://instagram.com/maria.glushenko?igshid=MzRlODBiNWFlZA==" onClick={openInstagram}>
            <IconContext.Provider
              value={{
                size: "28px",
                color: `${background}`,
              }}
            >
              <FaInstagram />
            </IconContext.Provider>
          </Buttons>
        </ButtonsItem>
        <ButtonsItem
          variants={animationElement} custom={3}
          backgroundColor={background} color={color}>
          <Buttons aria-label="Location" href="https://goo.gl/maps/o3qvsXRkfv8h3hdw5" target="_blank">
            <IconContext.Provider
              value={{
                size: "30px",
                color: `${background}`,
              }}
            >
              <SlLocationPin />
            </IconContext.Provider>
          </Buttons>
        </ButtonsItem>
        <ButtonsItem
          variants={animationElement} custom={4}
          backgroundColor={background} color={color}>
          <Buttons aria-label="Open telegram" href="https://t.me/MashaHlushenko" onClick={openTelegram}>
            <IconContext.Provider
              value={{
                size: "32px",
                color: `${background}`,
              }}
            >
              <LiaTelegram />
            </IconContext.Provider>
          </Buttons>
        </ButtonsItem>
        <ButtonsItem
          variants={animationElement} custom={5}
          backgroundColor={background} color={color}>
          <Buttons aria-label="Open whatsapp" href="https://api.whatsapp.com/send?phone=380936193616" onClick={openWhatsApp}>
            <IconContext.Provider
              value={{
                size: "32px",
                color: `${background}`,
              }}
            >
              <FaWhatsapp />
            </IconContext.Provider>
          </Buttons>
        </ButtonsItem>
        <ButtonsItem
          variants={animationElement} custom={6}
          backgroundColor={background} color={color}>
          <Buttons aria-label="Open viber" href="viber://chat?number=+380936193616" onClick={openViber}>
            <IconContext.Provider
              value={{
                size: "28px",
                color: `${background}`,
              }}
            >
              <FaViber />
            </IconContext.Provider>
          </Buttons>
        </ButtonsItem>
        <ButtonsItem
          variants={animationElement} custom={7}
          backgroundColor={background} color={color}>
          <Buttons aria-label="Phone number" onClick={makeCall}>
            <IconContext.Provider
              value={{
                size: "25px",
                color: `${background}`,
              }}
            >
              <LuPhone />
            </IconContext.Provider>
          </Buttons>
        </ButtonsItem>
      </ButtonContainer>
      <ContactsLinkContainer>
        <ContactsLink style={{ color: `${background}` }}>
          <IconContext.Provider
            value={{
              size: "15px",
              color: `${background}`,
            }}
          >
            <SlLocationPin />
          </IconContext.Provider>
          Київ, проспект Перемоги, 121а.
        </ContactsLink>
      </ContactsLinkContainer>
    </div>
  );
};

export default ConnectionButtons;
