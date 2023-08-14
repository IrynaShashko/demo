import styled from "@emotion/styled";
import { Form, Field } from "formik";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormTitle = styled.h1`
  font-size: 30px;
  color: #007586;
  margin-bottom: 20px;
  font-weight: lighter;
  text-transform: uppercase;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 0 100px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin-bottom: 5px;
  color: #000;
  font-weight: lighter;
  @media screen and (min-width: 425px) {
    width: 300px;
  }
`;

export const Input = styled(Field)`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  height: 30px;
  border: 1px solid #007586;
  border-radius: 8px;
  margin-top: 5px;
  font-size: 14px;
  outline: none;
  color: #000;
  background-color: transparent;
  &::placeholder {
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
  }
`;

export const Comment = styled(Field)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-color: #007586;
  border-radius: 8px;
  margin-top: 10px;
  height: 50px;
  font-size: 16px;
  margin-bottom: 20px;
  resize: none;
  font-family: "Montserrat", sans-serif;
  &::placeholder {
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
  }
`;

export const Option = styled.option`
  padding: 10px 20px;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
`;

export const OptionLable = styled(Field)`
  font-family: "Montserrat", sans-serif;
  height: 40px;
  width: 280px;
  border-color: #007586;
  border-radius: 8px;
  background-color: transparent;
  color: #000;
  padding: 5px 10px;
  font-size: 14px;
  margin-top: 5px;
  appearance: none;
  outline: none;
  @media screen and (min-width: 425px) {
    width: 300px;
  }
`;
