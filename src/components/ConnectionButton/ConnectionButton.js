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
      <ButtonContainer>
        <ButtonsItem backgroundColor={background} color={color}>
          <Buttons onClick={openInstagram}>
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
        <ButtonsItem backgroundColor={background} color={color}>
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
        <ButtonsItem backgroundColor={background} color={color}>
          <Buttons onClick={openTelegram}>
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
        <ButtonsItem backgroundColor={background} color={color}>
          <Buttons onClick={openWhatsApp}>
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
        <ButtonsItem backgroundColor={background} color={color}>
          <Buttons onClick={openViber}>
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
        <ButtonsItem backgroundColor={background} color={color}>
          <Buttons onClick={makeCall}>
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
