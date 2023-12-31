import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";

const growFont = keyframes`
  from {
    opacity: 0;
    transform: translate(0px, 50px); 
  }
  to {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & button {
    animation: ${growFont} 0.3s ease-out forwards;
    opacity: 0;
  }
  & button:nth-of-type(1) {
    animation-delay: 3.2s;
  }
`;

export const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  & p:not(:last-child) {
    margin-bottom: 10px;
    @media screen and (min-width: 1440px) {
      margin-bottom: 20px;
    }
  }
`;

export const Text = styled(motion.p)`
  font-size: 18px;
  color: #fff;
  text-align: center;
  font-weight: lighter;
  line-height: 25px;
  width: 280px;
  @media screen and (min-width: 768px) {
    line-height: 30px;
    font-size: 25px;
    width: 500px;
  }
  @media screen and (min-width: 1440px) {
    line-height: 40px;
    width: 800px;
  }
`;

export const ModalSubmitBtn = styled(motion.button)`
  border: none;
  background-color: transparent;
  border-radius: 8px;
  align-self: center;
  padding: 10px;
  color: #ffffff;
  width: 220px;
  font-size: 20px;
  font-family: 400;
  font-weight: lighter;
  cursor: pointer;
  box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 1);
  text-transform: uppercase;
  margin-top: 20px;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
  @media screen and (min-width: 425px) {
    width: 250px;
  }
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`;
