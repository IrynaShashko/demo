import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const ArticleContainer = styled.div`
  min-height: 700px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const ArticleLink = styled(NavLink)`
  font-size: 20px;
  color: #000;
  cursor: pointer;
  &.active {
    color: #007586;
    font-weight: 600;
  }
`;

export const ArticleItem = styled.div`
  margin-bottom: 20px;
  border: 1px solid #f1f1f1;
  padding: 10px;
  border-radius: 8px;
  background-color: #f1f1f1;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0px 0px 4px 2px rgba(166, 166, 169, 1);
`;

export const ArticleTitle = styled.h1`
  font-size: 25px;
  text-align: center;
  font-weight: lighter;
  text-transform: uppercase;
  margin-top: 30px;
  margin-bottom: 30px;
  letter-spacing: 5px;
  @media screen and (min-width: 768px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const ArticleAfterTitle = styled.h2`
  font-size: 20px;
  color: #007586;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  letter-spacing: 2px;
`;

export const ArticleText = styled.p`
  font-size: 16px;
  color: #696969;
  margin-bottom: 10px;
  text-indent: 50px;
  text-align: justify;
`;
