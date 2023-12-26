import { useState } from "react";
import { Form } from "formik";
import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useReviews } from "../../store";
import { Stars } from "../../pages/ReviewsPage/Reviews.styled";
import {
  FormContainer,
  FeedbackDiv,
  FeedbackTitle,
  FeedbackInputDiv,
  FeedbackLabel,
  FeedbackInput,
  StarDiv,
  StarButton,
  PopupDiv,
  Popup,
  PopupText,
  PopupButton,
} from "./FeedbackForm.styled";
import { ModalSubmitBtn } from "../Modal/Modal.styled";

const FeedbackForm = () => {
  const starArr = [1, 2, 3, 4, 5];
  const [totalPositiveStars, setTotalPositiveStars] = useState(1);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const reviewsStore = useReviews();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const newReview = {
        name: values.name,
        comment: values.comment,
        totalPositiveStars: totalPositiveStars,
      };
      resetForm();
      setTotalPositiveStars(1);

      reviewsStore.addReview(newReview);
      setIsPopupVisible(true);
    } catch (error) {
      console.error("Помилка відправлення на бекенд:", error);
    }
  };

  const handleClick = (e, index) => {
    e.preventDefault();
    setTotalPositiveStars(index + 1);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <FeedbackDiv>
      <FeedbackTitle>Залишити відгук</FeedbackTitle>
      <FormContainer
        initialValues={{
          name: "",
          comment: "",
          totalPositiveStars: totalPositiveStars,
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <FeedbackInputDiv>
            <FeedbackLabel htmlFor="name">Ім'я:</FeedbackLabel>
            <FeedbackInput
              type="text"
              id="name"
              name="name"
              placeholder="Напишіть ім'я"
            />
          </FeedbackInputDiv>
          <FeedbackInputDiv>
            <FeedbackLabel htmlFor="comment">Коментар:</FeedbackLabel>
            <FeedbackInput
              as="textarea"
              type="text"
              id="comment"
              name="comment"
              placeholder="Коментар"
              style={{
                resize: "none",
              }}
            />
          </FeedbackInputDiv>
          <StarDiv>
            <Stars>
              {starArr.map((el, index) => (
                <IconContext.Provider
                  key={index}
                  value={{
                    color: `${index >= totalPositiveStars ? "#ccc" : "orange"}`,
                    size: "20px",
                  }}
                >
                  <StarButton
                    type="button"
                    onClick={(e) => handleClick(e, index)}
                  >
                    <AiFillStar />
                  </StarButton>
                </IconContext.Provider>
              ))}
            </Stars>
          </StarDiv>
          <PopupDiv>
            <ModalSubmitBtn style={{ width: "100%" }} type="submit">
              Відправити
            </ModalSubmitBtn>
            {isPopupVisible && (
              <Popup>
                <PopupText>Ваш відгук успішно відправлено!</PopupText>
                <PopupButton onClick={closePopup}>Закрити</PopupButton>
              </Popup>
            )}
          </PopupDiv>
        </Form>
      </FormContainer>
    </FeedbackDiv>
  );
};

export default FeedbackForm;
