import styled from "@emotion/styled";

export const AboutContainer = styled.div`
  padding-bottom: 30px;
  background-color: #f2efee;
  @media screen and (min-width: 768px) {
    padding-bottom: 50px;
  }
`;

export const StudyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* align-items: center; */
  padding-top: 30px;

  @media screen and (min-width: 768px) {
    padding-top: 50px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
    to bottom,
    #f2efee 15%,
    #007586 15%,
    #007586 50%,
    #007586 50%,
    #007586 65%,
    #f2efee 65%
  );
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
    background-image: linear-gradient(
      to bottom,
      #f2efee 25%,
      #007586 25%,
      #007586 60%,
      #007586 60%,
      #007586 85%,
      #f2efee 85%
    );
  }

  @media screen and (min-width: 1440px) {
    background-image: linear-gradient(
      to bottom,
      #f2efee 15%,
      #007586 15%,
      #007586 50%,
      #007586 50%,
      #007586 90%,
      #f2efee 90%
    );
  }
`;

export const Image = styled.img`
  width: 280px;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 0px 2px 1px rgba(105, 105, 105, 1);
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
  color: #000;
  margin-bottom: 10px;
  font-weight: lighter;
  text-shadow: 0px 0px 7px rgba(255, 255, 255, 1);
  @media screen and (min-width: 768px) {
    font-size: 35px;
    color: #fff;
  }
`;

export const AfterTitle = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const TitleText = styled.p`
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  color: #696969;
  margin-bottom: 10px;
  text-indent: 50px;
  text-align: justify;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ItemText = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  color: #696969;
  text-align: justify;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ItemTitle = styled.h4`
  font-size: 20px;
  color: #007586;
  margin-bottom: 10px;
  text-transform: uppercase;
  line-height: 50px;
  text-align: center;
`;

export const DataTitle = styled.span`
  color: #000;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
