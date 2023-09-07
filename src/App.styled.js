import styled from "@emotion/styled";

export const Container = styled.div`
  width: 320px;
  margin: 0 auto;
  @media screen and (min-width: 375px) {
    width: 330px;
  }
  @media screen and (min-width: 767px) {
    width: 650px;
  }
  @media screen and (min-width: 1440px) {
    width: 1000px;
  }
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 20px;
  z-index: 2;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const Main = styled.main``;
