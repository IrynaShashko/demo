import { IconContext } from "react-icons";
import { LuPhone } from "react-icons/lu";
import { FaViber } from "react-icons/fa";
import { LiaTelegram } from "react-icons/lia";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import {
  ButtonContainer,
  ButtonsItem,
  Buttons,
} from "./ConnectionButton.styled";

const ConnectionButtons = ({ background, color }) => {
  function openTelegram() {
    window.open("https://t.me/Iryna_Shashko");
  }

  function openWhatsApp() {
    window.open("https://api.whatsapp.com/send?phone=380999304877");
  }

  function openViber() {
    window.open("viber://chat?number=+380999304877");
  }

  function openInstagram() {
    window.open(
      "https://instagram.com/maria.glushenko?igshid=MzRlODBiNWFlZA=="
    );
  }

  function makeCall() {
    window.open("tel:+380999304877");
  }

  return (
    <ButtonContainer>
      <ButtonsItem backgroundColor={background}>
        <Buttons type="button" onClick={openInstagram}>
          <IconContext.Provider
            value={{
              size: "25px",
              color: `${color}`,
            }}
          >
            <FaInstagram />
          </IconContext.Provider>
        </Buttons>
      </ButtonsItem>
      <ButtonsItem backgroundColor={background}>
        <Buttons href="https://goo.gl/maps/o3qvsXRkfv8h3hdw5" target="_blank">
          <IconContext.Provider
            value={{
              size: "25px",
              color: `${color}`,
            }}
          >
            <SlLocationPin />
          </IconContext.Provider>
        </Buttons>
      </ButtonsItem>
      <ButtonsItem backgroundColor={background}>
        <Buttons type="button" onClick={openTelegram}>
          <IconContext.Provider
            value={{
              size: "25px",
              color: `${color}`,
            }}
          >
            <LiaTelegram />
          </IconContext.Provider>
        </Buttons>
      </ButtonsItem>
      <ButtonsItem backgroundColor={background}>
        <Buttons type="button" onClick={openWhatsApp}>
          <IconContext.Provider
            value={{
              size: "25px",
              color: `${color}`,
            }}
          >
            <FaWhatsapp />
          </IconContext.Provider>
        </Buttons>
      </ButtonsItem>
      <ButtonsItem backgroundColor={background}>
        <Buttons type="button" onClick={openViber}>
          <IconContext.Provider
            value={{
              size: "25px",
              color: `${color}`,
            }}
          >
            <FaViber />
          </IconContext.Provider>
        </Buttons>
      </ButtonsItem>
      <ButtonsItem backgroundColor={background}>
        <Buttons type="button" onClick={makeCall}>
          <IconContext.Provider
            value={{
              size: "25px",
              color: `${color}`,
            }}
          >
            <LuPhone />
          </IconContext.Provider>
        </Buttons>
      </ButtonsItem>
    </ButtonContainer>
  );
};

export default ConnectionButtons;
