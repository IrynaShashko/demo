import { useState } from "react";
import { IconContext } from "react-icons";
import { LuPhone } from "react-icons/lu";
import { FaViber } from "react-icons/fa";
import { LiaTelegram } from "react-icons/lia";
import {
  PhoneContainer,
  MainButton,
  ButtonDiv,
  Buttons,
} from "../PhoneButton/PhoneButton.styled";

const PhoneButton = () => {
  const [isAdditionalButtonsVisible, setAdditionalButtonsVisible] =
    useState(false);

  function toggleButtons() {
    setAdditionalButtonsVisible((prevValue) => !prevValue);
  }

  function openTelegram() {
    window.open("https://t.me/Iryna_Shashko");
  }

  function openViber() {
    window.open("viber://chat?number=+380999304877");
  }

  function makeCall() {
    window.open("tel:+380999304877");
  }
  return (
    <PhoneContainer>
      <ButtonDiv
        id="additionalButtons"
        className={isAdditionalButtonsVisible ? "show" : "hidden"}
        show={isAdditionalButtonsVisible}
      >
        <Buttons type="button" onClick={makeCall}>
          <IconContext.Provider
            value={{
              size: "30px",
              color: "#fff",
            }}
          >
            <LuPhone />
          </IconContext.Provider>
        </Buttons>
        <Buttons type="button" onClick={openTelegram}>
          <IconContext.Provider
            value={{
              size: "30px",
              color: "#fff",
            }}
          >
            <LiaTelegram />
          </IconContext.Provider>
        </Buttons>
        <Buttons type="button" onClick={openViber}>
          <IconContext.Provider
            value={{
              size: "30px",
              color: "#fff",
            }}
          >
            <FaViber />
          </IconContext.Provider>
        </Buttons>
      </ButtonDiv>
      <MainButton onClick={toggleButtons}>
        <IconContext.Provider
          value={{
            size: "30px",
            color: "#fff",
          }}
        >
          <LuPhone />
        </IconContext.Provider>
      </MainButton>
    </PhoneContainer>
  );
};

export default PhoneButton;