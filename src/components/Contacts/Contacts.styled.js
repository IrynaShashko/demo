import styled from "@emotion/styled";

export const ContactsContainer = styled.div`
  background-color: #007586;
  text-align: center;
  padding: 50px 20px;
`;

export const ContactsLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  & p {
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

export const ContactsLink = styled.p`
  text-decoration: none;
  color: #fff;
  font-size: 18px;
`;
