import styled from "@emotion/styled";

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

export const ButtonContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  & li:not(:last-child) {
    margin-right: 10px;
  }
`;

export const ButtonsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  height: 30px;
  width: 30px;
  padding: 10px;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const Buttons = styled.a`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
