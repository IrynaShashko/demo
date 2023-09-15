import styled from "@emotion/styled";

import photo from "../../images/10.jpg";




export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  background-image: linear-gradient(
      0deg,
      rgba(50, 49, 49, 0.437) 0%,
      rgba(50, 49, 49, 0.527) 100%
    ),
    url(${photo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 550px;
  @media screen and (min-width: 768px) {
    height: 600px;
  }
  @media screen and (min-width: 1440px) {
    height: 700px;
  }
`;



export const LocationText = styled.p`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-weight: lighter;
  text-shadow: 0px 0px 7px rgba(255, 255, 255, 1);
`;

export const ModalNumber = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 25px;
  font-weight: lighter;
  text-shadow: 0px 0px 7px rgba(255, 255, 255, 1);
`;

export const LocationButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-bottom: 20px;
`;

export const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  text-align: center;
`;

