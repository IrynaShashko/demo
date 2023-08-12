import styled from "@emotion/styled";

export const ButtonContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
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

export const Buttons = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
