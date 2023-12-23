import styled from "@emotion/styled";
import { Formik, Field } from "formik";

export const FormContainer = styled(Formik)`
  width: 600px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #007586;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const FeedbackDiv = styled.div`
  padding-top: 50px;
  padding-bottom: 20px;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const FeedbackTitle = styled.h3`
  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: lighter;
  text-align: center;
  @media screen and (min-width: 1440px) {
    margin-right: 30px;
  }
`;

export const FeedbackInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const FeedbackLabel = styled.label`
  font-size: 16px;
  font-weight: lighter;
  margin-bottom: 5px;
`;

export const FeedbackInput = styled(Field)`
  padding: 10px;
  border: 1px solid #d2d2d2;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border 0.2s ease-in-out;
  &::placeholder {
    font-size: 14px;
    font-weight: lighter;
    font-family: "Montserrat";
  }
`;

export const StarDiv = styled.div`
  margin-bottom: 20px;
`;

export const StarButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const PopupDiv = styled.div`
  position: relative;
`;

export const Popup = styled.div`
  position: absolute;
  top: -130px;
  left: 0px;
  background-color: white;
  padding: 20px;
  border: 1px solid #007586;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const PopupText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  text-align: center;
`;

export const PopupButton = styled.button`
  padding: 5px;
  border-radius: 8px;
  background-color: #007586;
  color: #fff;
  cursor: pointer;
`;
