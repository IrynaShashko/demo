import React from "react";

import { AiFillStar } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { IconContext } from "react-icons";
import {
  Stars,
  StarButton,
  ReviewsContainer,
  List,
  ListItem,
  Div,
  UserDiv,
  UserName,
  Title,
  StarsTitle,
  TitleContainer,
  Text,
  ItemDiv,
} from "./Reviews.styled";
import { Container } from "../../App.styled";
import reviews from "../../reviews.json";

const ReviewsPage = () => {
  const starArr = [1, 2, 3, 4, 5];

  return (
    <ReviewsContainer>
      <Container>
        <TitleContainer>
          <Title>Відгуки</Title>
          <Div>
            <StarsTitle>5.0</StarsTitle>
            <Stars>
              {starArr.map((el, index) => (
                <IconContext.Provider
                  key={index}
                  value={{
                    color: "orange",
                    size: "20px",
                  }}
                >
                  <StarButton type="button">
                    <AiFillStar />
                  </StarButton>
                </IconContext.Provider>
              ))}
            </Stars>
          </Div>
        </TitleContainer>
        {/* <StarsText>Базовано на відгуках: {reviews.length}</StarsText> */}
        <List>
          {reviews?.map((item) => (
            <ListItem key={item.id}>
              <ItemDiv>
                <Div>
                  <UserDiv>
                    <IconContext.Provider
                      value={{
                        color: "#007586",
                        size: "20px",
                      }}
                    >
                      <BiUser />
                    </IconContext.Provider>
                  </UserDiv>
                  <div>
                    <UserName>{item.name}</UserName>
                    <Stars>
                      {starArr.map((el, index) => (
                        <IconContext.Provider
                          key={index}
                          value={{
                            color: `${
                              index >= item.totalPositiveStars
                                ? "#ccc"
                                : "orange"
                            }`,
                          }}
                        >
                          <AiFillStar />
                        </IconContext.Provider>
                      ))}
                    </Stars>
                  </div>
                </Div>
                <Text>{item.comment}</Text>
              </ItemDiv>
            </ListItem>
          ))}
        </List>
      </Container>
    </ReviewsContainer>
  );
};

export default ReviewsPage;
