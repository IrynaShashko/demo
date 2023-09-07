import styled from "@emotion/styled";
import { keyframes } from '@emotion/react';
import photo from "../../images/10.jpg";

const growFont = keyframes`
  from {
    opacity: 0;
    transform: translate(0px, 0px);
    
  }
  to {
    opacity: 1;
    transform: translate(0px,0px);
    
  }
`;


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
  height: 500px;
  @media screen and (min-width: 768px) {
    height: 600px;
  }
  @media screen and (min-width: 1440px) {
    height: 700px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
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

export const AnimationDiv = styled.div`

  & p {
    animation: ${growFont} 0.5s ease;
  }

  & p:nth-of-type(1) {
    animation-delay: 0.2s;
    opacity: 1;
  }

  & p:nth-of-type(2) {
    animation-delay: 0.6s;
  }

  & p:nth-of-type(3) {
    animation-delay: 1s;
  }

  & p:nth-of-type(4) {
    animation-delay: 1.2s;
  }

  & p:nth-of-type(5) {
    animation-delay: 1.6s;
  }

  & p:nth-of-type(6) {
    animation-delay: 1.8s;
  }
`

export const Text = styled.p`
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

export const MainText = styled.p`
  font-size: 16px;
  color: #696969;
  text-align: center;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
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

export const ModalSubmitBtn = styled.button`
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

export const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  text-align: center;
`;

export const Title = styled.h3`
  color: #007586;
  font-size: 30px;
  font-weight: lighter;
  text-transform: uppercase;
  align-self: center;
  margin: auto;
  margin-bottom: 20px;
`;

export const InfoContainer = styled.ul`
  padding: 0 20px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1.5fr 1fr;
    gap: 10px 10px;
  }
`;

export const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 0;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`;

export const InfoTitle = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  // text-transform: uppercase;
  color: #007586;
`;

export const SvgContainer = styled.div`
  background-color: #007586;
  width: 120px;
  height: 120px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Icon = styled.img`
  display: inline-block;
  width: 4em;
  height: 4em;
  stroke-width: 0;
  stroke: #007586;
  fill: #007586;
`;
