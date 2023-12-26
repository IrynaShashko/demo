import styled from "@emotion/styled";
import photo from "../../images/11.jpg";

export const Stars = styled.div`
  display: flex;
  align-items: center;
`;

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2efee;
  padding-top: 20px;
  padding-bottom: 30px;
  justify-content: center;
`;

export const ReviewsTitle = styled.h3`
  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: lighter;
  text-align: center;
`;

export const List = styled.div`
  width: 300px;
  margin: 0 auto;
  @media screen and (min-width: 375px) {
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    width: 550px;
  }
  @media screen and (min-width: 1440px) {
    width: 700px;
  }
`;

export const ListItem = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(50, 49, 49, 0.437) 0%,
      rgba(50, 49, 49, 0.527) 100%
    ),
    url(${photo});
  background-size: cover;
  background-position: center;
  box-shadow: -3px 4px 15px 0px rgba(0, 0, 0, 0.02);
  height: 400px;
  width: 100%;
  border-radius: 8px;
  box-sizing: border-box;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`;

export const UserIconDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const ItemDiv = styled.div`
  height: 100%;
  overflow: hidden;
  padding: 50px;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.7);
  overflow: auto;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding-inline: 80px;
  }
`;

export const UserName = styled.p`
  color: #007586;
  margin-bottom: 10px;
  font-size: 18px;
  overflow: hidden;
`;

export const StarsText = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const ScrollableText = styled.div`
  max-height: 220px;
  overflow-y: auto;
  @media screen and (min-width: 1440px) {
    max-height: 300px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  color: #696969;
  /* text-align: center; */
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    padding-top: 20px;
  }
`;
