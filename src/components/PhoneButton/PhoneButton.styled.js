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
    box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 1);
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
    opacity: 0;
    transform: translate(200px, 0px); 
  }
  to {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;

export const PhoneContainer = styled.div`
  position: fixed;
  bottom: 5px;
  right: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
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
    cursor: pointer;
  &:hover {
    background-color: #015b69;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  z-index: 5;
  & button {
    opacity: 0; 
    animation: ${({ animationShow }) => animationShow ? css`${slideInFromRight} 0.3s ease-out forwards` : "none"};
    
  }

  & button:nth-of-type(4) {
  animation-delay: 0.6s;
}
  & button:nth-of-type(3) {
  animation-delay: 0.8s;
}
  & button:nth-of-type(2) {
  animation-delay: 1s;
}
  & button:nth-of-type(1) {
  animation-delay: 1.2s;
}
`;

export const Buttons = styled.button`
padding: 12px 14px;
border: none;
border-radius: 50px;
background-color: #007586;
margin-bottom: 5px;
border: 2px solid #fff;
cursor: pointer;
  &:hover,
  &:focus {
  background-color: #01606e;
}
`;
