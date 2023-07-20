import styled from "@emotion/styled";

export const Stars = styled.div`
  display: flex;
  align-items: center;
`;

export const StarButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`;

export const List = styled.ul`
  width: 300px;
  @media screen and (min-width: 375px) {
    width: 350px;
  }
  @media screen and (min-width: 768px) {
    width: 600px;
  }
  @media screen and (min-width: 1440px) {
    width: 800px;
  }
`;

export const ListItem = styled.li`
  border-radius: 8px;
  border: 1px solid #e3e2e2;
  background: #fff;
  box-shadow: -3px 4px 15px 0px rgba(0, 0, 0, 0.06);
  height: 245px;
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 10px;
  overflow-y: scroll;
  box-sizing: border-box;
  @media screen and (min-width: 375px) {
    height: 230px;
  }
  @media screen and (min-width: 768px) {
    height: 200px;
  }
  @media screen and (min-width: 1440px) {
    height: 220px;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const ItemDiv = styled.div`
  height: 100%;
  overflow: hidden;
  padding-bottom: 20px;
  box-sizing: border-box;
  overflow-y: scroll;
`;

export const UserDiv = styled.div`
  border-radius: 50px;
  background-color: #fff;
  width: 20px;
  padding: 6px 8px;
  margin-right: 20px;
  border: 1px solid #007586;
  // box-shadow: inset 0px 0px 11px -2px rgba(0, 117, 134, 1);
`;

export const UserName = styled.p`
  color: #007586;
  text-shadow: 0px 0px 7px rgba(0, 117, 134, 1);
  margin-bottom: 5px;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: lighter;
  text-transform: uppercase;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StarsTitle = styled.p`
  margin-right: 10px;
  font-size: 16px;
  margin-left: 20px;
  font-weight: lighter;
`;

export const StarsText = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: lighter;
`;
