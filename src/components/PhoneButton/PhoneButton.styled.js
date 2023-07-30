import styled from "@emotion/styled";
import { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const PhoneContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (width: 768px) {
    bottom: 30px;
    right: 30px;
  }
  @media screen and (width: 1440px) {
    bottom: 50px;
    right: 50px;
  }
`;

export const MainButton = styled.button`
  padding: 20px;
  font-size: 16px;
  animation: ${pulse} 2s infinite;
  border-radius: 50px;
  background-color: #007586;
  border: none;
  box-shadow: 0px 1px 8px 1px rgba(255, 255, 255, 1);
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  opacity: ${(props) => (props.show ? 1 : 0)};
  animation: ${(props) => (props.show ? slideInFromLeft : "none")} 0.3s ease;

  button {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${(props) =>
    props.show &&
    `
    button:nth-of-type(1) {
      opacity: 1;
      transition-delay: 0.6s;
    }
    button:nth-of-type(2) {
      opacity: 1;
      transition-delay: 0.4s;
    }
    button:nth-of-type(3) {
      opacity: 1;
      transition-delay: 0.2s;
    }
  `}
`;

export const Buttons = styled.button`
  padding: 10px;
  border: none;
  border-radius: 50px;
  background-color: #007586;
  margin-bottom: 10px;
  box-shadow: 0px 1px 8px 1px rgba(255, 255, 255, 1);
`;
