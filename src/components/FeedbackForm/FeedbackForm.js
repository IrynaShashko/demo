import { useState } from "react";
import { Form } from "formik";
import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";
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
} from "./FeedbackForm.styled";
import { ModalSubmitBtn } from "../Modal/Modal.styled";

const FeedbackForm = () => {
  const starArr = [1, 2, 3, 4, 5];
  const [totalPositiveStars, setTotalPositiveStars] = useState(1);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch(
        "https://massage-reviews.onrender.com/api/reviews",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...values, totalPositiveStars }),
        }
      );

      if (response.ok) {
        resetForm();
      } else {
        console.error("Помилка відправлення на бекенд:", response.status);
      }
    } catch (error) {
      console.error("Помилка відправлення на бекенд:", error);
    }
  };

  const handleClick = (e, index) => {
    e.preventDefault();
    setTotalPositiveStars(index + 1);
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
              type="text"
              id="comment"
              name="comment"
              placeholder="Коментар"
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
          <ModalSubmitBtn type="submit">Відправити</ModalSubmitBtn>
        </Form>
      </FormContainer>
    </FeedbackDiv>
  );
};

export default FeedbackForm;
