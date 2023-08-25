import styled from "@emotion/styled";

export const ContactsContainer = styled.div`
  background-color: #007586;
  text-align: center;
  padding: 50px 20px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr;
  gap: 10px 10px;
  grid-template-areas:
    "grid1"
    "grid2";
  @media screen and (min-width: 1440px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "grid1 grid2";
  }
`;

export const Grid1 = styled.div`
  grid-area: "grid1";
  align-self: center;
`;

export const Grid2 = styled.div`
  grid-area: "grid2";
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: lighter;
  margin-bottom: 20px;
`;

export const Location = styled.iframe`
  width: 320px;
  height: 300px;
  border-radius: 8px;
  border: none;
  @media screen and (min-width: 768px) {
    width: 500px;
    height: 300px;
  }
`;
