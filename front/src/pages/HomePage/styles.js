import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 200px auto;
`;
export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  padding: 0 5%;
  width: 100%;
  gap: 10px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
export const Image = styled.img`
  height: 280px;

  @media (max-width: 500px) {
    order: 1;
    height: 230px;
  }
`;
export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    order: 2;
  }
`;
export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Title = styled.p`
  font-size: 80px;
  font-family: Caveat;
  font-weight: bold;
  margin: 0px;

  ${(props) =>
    props.secundary &&
    css`
      font-size: 30px;
      margin-bottom: -5%;
    `}
`;
export const Desc = styled.p`
  font-size: 24px;
  font-family: Noto Sans JP;
  max-width: 600px;
  margin-top: 5px;

  /* @media (max-width: 500px) {
    font-size: 17px;
  } */
  @media (max-width: 450px) {
    font-size: 17px;
  }
`;
