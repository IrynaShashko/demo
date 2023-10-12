import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ContactsLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  & p {
    margin-bottom: 20px;
  }
`;

export const ContactsLink = styled.p`
  text-decoration: none;
  color: ${(props) => props.color};
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled(motion.ul)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  & li:not(:last-child) {
    margin-right: 5px;
  }
`;

export const ButtonsItem = styled(motion.li)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  height: 25px;
  width: 25px;
  padding: 10px;
  outline: none;
  border-radius: 10px;
  border: 2px solid ${(props) => props.backgroundсolor};
  cursor: pointer;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: ${(props) => props.color};
    /* filter: brightness(0.8); */
  }
`;

export const Buttons = styled.a`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
