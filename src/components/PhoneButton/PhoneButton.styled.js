import styled from "@emotion/styled";
import { css, keyframes } from '@emotion/react';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  20%{transform: scale(1.2) rotate(15deg);
    background-color: #01606e;}
  60% {
    transform: scale(1.2) rotate(-15deg);
    background-color: #01606e;
  }
  80%{
transform: scale(1.2) rotate(15deg);
    background-color: #01606e;
  }
  100% {
    transform: scale(1);
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(250px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const PhoneContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    bottom: 30px;
    right: 30px;
  }
  @media screen and (min-width: 1440px) {
    bottom: 70px;
    right: 70px;
  }
`;

export const MainButton = styled.button`
  padding: 16px 18px;
  font-size: 16px;
  animation: ${({ stopAnimation }) =>
    stopAnimation
      ? 'none'
      : css`
          ${pulse} 2s infinite
        `};
  border-radius: 50px;
  background-color:#007586;
  border: 2px solid #fff;
  box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 1);
  cursor: pointer;
  &:hover {
    background-color: #015b69;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  opacity: ${(props) => (props.show ? 1 : 0)};
  animation: ${(props) => (props.show ? slideInFromRight : "none")} 0.8s ease;

   & button {
    opacity: 0;
    transition: opacity 0.1s ease;
  }

  ${(props) =>
    props.show &&
    `
    button:nth-of-type(1) {
      opacity: 1;
      transition-delay: 0.8s;
    }
    button:nth-of-type(2) {
      opacity: 1;
      transition-delay: 0.6s;
    }
    button:nth-of-type(3) {
      opacity: 1;
      transition-delay: 0.4s;
    }
    button:nth-of-type(4) {
      opacity: 1;
      transition-delay: 0.2s;
    }
  `}
`;

export const Buttons = styled.button`
  padding: 12px 14px;
  border: none;
  border-radius: 50px;
  background-color: #007586;
  margin-bottom: 10px;
  box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    background: #01606e;
  }
`;
