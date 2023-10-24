import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const InfoContainer = styled(motion.ul)`
  padding: 0 20px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1.5fr 1fr;
    gap: 10px 10px;
  }
`;

export const InfoItem = styled(motion.li)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 0;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`;

export const InfoTitle = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  // text-transform: uppercase;
  color: #007586;
`;

export const SvgContainer = styled.div`
  background-color: #007586;
  width: 120px;
  height: 120px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Icon = styled.img`
  display: inline-block;
  width: 4em;
  height: 4em;
  stroke-width: 0;
  stroke: #007586;
  fill: #007586;
`;

export const Title = styled.h3`
  color: #007586;
  font-size: 30px;
  font-weight: lighter;
  text-transform: uppercase;
  align-self: center;
  margin: auto;
  margin-bottom: 20px;
`;

export const MainText = styled.p`
  font-size: 16px;
  color: #696969;
  text-align: center;
  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;
