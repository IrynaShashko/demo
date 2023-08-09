import styled from "@emotion/styled";

export const ContactsContainer = styled.div`
  background-color: #007586;
  text-align: center;
  padding: 50px 20px;
`;

export const ContactsLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  & a {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: lighter;
  margin-bottom: 20px;
`;

export const ContactsLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 18px;
`;

export const IconList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & li:not(:last-child) {
    margin-right: 20px;
  }
`;

export const IconContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 2px 1px rgba(105, 105, 105, 1);
`;