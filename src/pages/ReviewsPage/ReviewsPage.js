import React, { useState, useEffect } from "react";
import { onSnapshot } from "mobx-state-tree";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import Contacts from "../../components/Contacts/Contacts";
import Loader from "../../components/Loader/Loader";
import { IconContext } from "react-icons";
import { useReviews } from "../../store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css";
import {
  Stars,
  ReviewsContainer,
  List,
  ListItem,
  // UserDiv,
  UserIconDiv,
  UserName,
  // Title,
  // TitleContainer,
  ReviewsTitle,
  Text,
  ItemDiv,
  TitleDiv,
} from "./Reviews.styled";
import { Container } from "../../App.styled";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";

const ReviewsPage = () => {
  const starArr = [1, 2, 3, 4, 5];
  const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  const reviewsStore = useReviews();

  useEffect(() => {
    const fetchData = async () => {
      await reviewsStore.fetchReviews();
      const reviews = reviewsStore.toJSON().reviews;
      setData(reviews);
    };

    const unsubscribe = onSnapshot(reviewsStore, (snapshot) => {
      const reviews = snapshot.reviews;
      setData(reviews);
    });

    fetchData();

    return () => {
      unsubscribe();
    };
  }, [reviewsStore]);

  // if (error) {
  //   return <div>Помилка: {error}</div>;
  // }

  if (!data) {
    return <Loader />;
  }

  const settings = {
    dots: false,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
    pauseOnHover: true,
  };

  const reviewsItem = data?.map((item) => (
    <ListItem key={item._id}>
      <ItemDiv>
        <TitleDiv>
          <UserIconDiv>
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
          </UserIconDiv>
        </TitleDiv>
        <Text>{item.comment}</Text>
      </ItemDiv>
    </ListItem>
  ));

  return (
    <>
      <ReviewsContainer>
        <Container>
          <ReviewsTitle>Відгуки клієнтів</ReviewsTitle>
          <List>
            <Slider {...settings} className="slider">
              {reviewsItem}
            </Slider>
          </List>
        </Container>
        <FeedbackForm />
      </ReviewsContainer>
      <Contacts />
    </>
  );
};

export default ReviewsPage;
