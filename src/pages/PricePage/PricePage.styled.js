import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const BackgroundImageStyle = styled.div`
  box-sizing: border-box;
  background-color: #f2efee;
  width: 100%;
  min-height: 550px;
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  padding-top: 10px;
  li:not(:last-child) {
    margin-right: 10px;
  }
  @media screen and (min-width: 767px) {
    padding-top: 20px;
  }
`;

export const Item = styled(NavLink)`
  color: #696969;
  font-size: 14px;
  padding: 5px;
  padding-bottom: 0;
  &.active {
    box-shadow: 1px -4px 6px -4px rgba(105, 105, 105, 1);
    font-weight: 600;
    font-size: 16px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    border-top: 1px solid #696969;
    border-left: 1px solid #696969;
    border-right: 1px solid #696969;
    padding-bottom: 0;
    @media screen and (min-width: 767px) {
      font-size: 18px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 20px;
    }
  }
  @media screen and (min-width: 767px) {
    padding-bottom: 0;
    padding: 10px;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 0;
    font-size: 18px;
  }
`;

export const PriceContainer = styled.table`
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 30px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media screen and (min-width: 375px) {
    width: 350px;
  }
  @media screen and (min-width: 768px) {
    padding: 20px;
    width: 650px;
  }
  @media screen and (min-width: 1440px) {
    padding: 30px;
    width: 800px;
  }
`;

export const PriceItem = styled.tr`
  background-color: #fff;
  height: 50px;
  border: none;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const ItemTitle = styled.td`
  font-size: 16px;
  padding: 10px;
  color: #696969;
  /* text-shadow: 2px 2px 5px #585858; */
  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 10px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ItemText = styled.td`
  font-size: 14px;
  padding: 10px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 10px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    padding: 10px;
  }
`;
