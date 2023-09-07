import React, { useState } from "react";
import { IconContext } from "react-icons";
import { LuPhone } from "react-icons/lu";
import { FaViber, FaWhatsapp } from "react-icons/fa";
import { LiaTelegram } from "react-icons/lia";
import "../../index.css";
import {
  PhoneContainer,
  MainButton,
  ButtonDiv,
  Buttons,
} from "../PhoneButton/PhoneButton.styled";

const PhoneButton = () => {
  const [isAdditionalButtonsVisible, setAdditionalButtonsVisible] =
    useState(false);
  const icon = document.getElementById("icon");

  const toggleButtons = () => {
    setAdditionalButtonsVisible((prevValue) => !prevValue);
    if (!isAdditionalButtonsVisible) {
      icon.style.transform = "rotate(-45deg)";
    } else {
      icon.style.transform = "rotate(0deg)";
    }
  };

  const openLink = (url) => {
    window.open(url);
  };

  return (
    <PhoneContainer>
      <ButtonDiv
        id="additionalButtons"
        className={isAdditionalButtonsVisible ? "show" : "hidden"}
        show={isAdditionalButtonsVisible}
      >
        <Buttons type="button"
          onClick={() => openLink("tel:+380936193616")}>
          <IconContext.Provider
            value={{
              size: "20px",
              color: "#fff",
            }}
          >
            <LuPhone />
          </IconContext.Provider>
        </Buttons>
        <Buttons
          type="button"
          onClick={() => openLink("https://t.me/MashaHlushenko")}
        >
          <IconContext.Provider
            value={{
              size: "20px",
              color: "#fff",
            }}
          >
            <LiaTelegram />
          </IconContext.Provider>
        </Buttons>
        <Buttons
          type="button"
          onClick={() => openLink("https://api.whatsapp.com/send?phone=380936193616")}
        >
          <IconContext.Provider
            value={{
              size: "20px",
              color: "#fff",
            }}
          >
            <FaWhatsapp />
          </IconContext.Provider>
        </Buttons>
        <Buttons
          type="button"
          onClick={() => openLink("viber://chat?number=+380936193616")}
        >
          <IconContext.Provider
            value={{
              size: "20px",
              color: "#fff",
            }}
          >
            <FaViber />
          </IconContext.Provider>
        </Buttons>
      </ButtonDiv>
      <MainButton onClick={toggleButtons} stopAnimation={isAdditionalButtonsVisible}>
        <IconContext.Provider
          value={{
            size: "25px",
            color: "#fff",
          }}
        >
          <LuPhone id="icon" />
        </IconContext.Provider>
      </MainButton>
    </PhoneContainer>
  );
};

export default PhoneButton;
