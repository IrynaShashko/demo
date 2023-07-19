import styled from "@emotion/styled";
import { Form, Field } from "formik";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const FormTitle = styled.h1`
  font-size: 25px;
  color: #007586;
  margin-bottom: 10px;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 280px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin-bottom: 5px;
  color: #000;
`;

export const Input = styled(Field)`
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-color: #007586;
  border-radius: 8px;
  margin-top: 5px;
  font-size: 14px;
  outline: none;
  color: #000;
`;

export const Comment = styled(Field)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-color: #007586;
  border-radius: 8px;
  margin-top: 10px;
  height: 50px;
  font-size: 18px;
  margin-bottom: 20px;
  resize: none;
`;
