import styled from "@emotion/styled";

export const StudyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* align-items: center; */
  @media screen and (min-width: 768px) {
    /* flex-direction: row; */
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  width: 280px;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 1px 12px 1px rgba(0, 0, 0, 1);
  @media screen and (min-width: 768px) {
    width: 200px;
  }
  @media screen and (min-width: 1440px) {
    width: 300px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 50px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  margin-top: 20px;
  color: #007586;
  margin-bottom: 10px;
  font-weight: lighter;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`;

export const AfterTitle = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: lighter;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ItemText = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ItemTitle = styled.h4`
  font-size: 20px;
  color: #007586;
  margin-bottom: 10px;
  font-weight: lighter;
  line-height: 30px;
  text-transform: uppercase;
`;

export const DataTitle = styled.span`
  font-weight: lighter;
  color: #000;
  font-size: 18px;
`;

export const AboutNumber = styled.a`
  text-decoration: none;
  color: #007586;
  font-size: 18px;
  font-weight: lighter;
  text-shadow: 0px 0px 7px rgba(0, 117, 134, 1);
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`;
