import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  @media screen and (min-width: 767px) {
    padding-top: 50px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 100px;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const Div = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  & p:not(:last-child) {
    margin-bottom: 10px;
    @media screen and (min-width: 1440px) {
      margin-bottom: 20px;
    }
  }
`;

export const Text = styled.p`
  font-size: 20px;
  @media screen and (min-width: 1440px) {
    font-size: 25px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 150px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    height: 250px;
  }
`;

export const ImageLeft = styled.img`
  width: 150px;
  object-fit: cover;
  border-top-left-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`;

export const ImageRight = styled.img`
  width: 150px;
  object-fit: cover;
  margin-left: 5px;
  border-bottom-right-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`;

export const LocationText = styled.p`
  text-decoration: none;
  color: #007586;
  font-size: 20px;
  text-shadow: 2px 2px 5px #656666;
`;
