import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const SuccessBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 117, 134, 1);
  z-index: 2;
`;

export const SuccessContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 200px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 300px;
  }
`;

export const SuccessTitle = styled.h1`
  font-size: 20px;
  color: #007586;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;

export const SuccessText = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 50px;
  }
`;

export const SuccessSubmitBtn = styled(NavLink)`
  border: none;
  background-color: #007586;
  border-radius: 8px;
  align-self: center;
  padding: 10px 20px;
  color: #ffffff;
  width: 200px;
  font-size: 20px;
  font-family: 400;
  font-weight: lighter;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 5px 0px rgba(105, 105, 105, 1);
  @media screen and (min-width: 425px) {
    width: 300px;
  }
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`;
