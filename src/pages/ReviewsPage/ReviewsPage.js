import React from "react";

import { AiFillStar } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { IconContext } from "react-icons";
import {
  Stars,
  StarButton,
  Container,
  List,
  ListItem,
  Div,
  UserDiv,
  UserName,
  Title,
  StarsTitle,
  // StarsText,
  ItemDiv,
} from "./Reviews.styled";
import reviews from "../../reviews.json";

const ReviewsPage = () => {
  const starArr = [1, 2, 3, 4, 5];

  return (
    <Container>
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
                      size: "30px",
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
                            index >= item.totalPositiveStars ? "#ccc" : "orange"
                          }`,
                        }}
                      >
                        <AiFillStar />
                      </IconContext.Provider>
                    ))}
                  </Stars>
                </div>
              </Div>
              <p>{item.comment}</p>
            </ItemDiv>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ReviewsPage;
