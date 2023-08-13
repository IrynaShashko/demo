import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const ContainerNav = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const NavLinkContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const LogoMG = styled.img`
  width: 30px;
  height: 100%;
`;

export const Logo = styled.img`
  width: 120px;
  height: 100%;
  cursor: pointer;
`;

export const ModalButton = styled.button`
  border: none;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled(NavLink)`
  color: #000000;
  text-decoration: none;
  margin-left: 10px;
  &.active {
    border-bottom: 2px solid #007586;
    color: #007586;
    padding: 10px;
  }
  &:hover {
    color: #007586;
    filter: brightness(1.2);
  }
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
`;

export const ContactButton = styled.button`
  font-size: 12px;
  color: #000000;
  border: none;
  background-color: transparent;
  margin-left: 10px;
  &:hover {
    color: #007586;
    filter: brightness(1.2);
  }
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
`;
