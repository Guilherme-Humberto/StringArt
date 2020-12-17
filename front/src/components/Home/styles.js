import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
`;
export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap-reverse;
  justify-content: center;
  width: 100%;
  gap: 10px 90px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
export const ContainerImage = styled.div`
  position: relative;
  height: 280px;
  width: 300px;
  object-fit: contain;
  object-position: 50% 50%;

  @media (max-width: 500px) {
    order: 1;
    height: 230px;
  }
  @media (max-width: 450px) {
    order: 1;
    height: 180px;
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

  @media (max-width: 500px) {
    justify-content: center;
    text-align: center;
  }
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

  @media (max-width: 500px) {
    font-size: 60px;
    margin: 5px;
    text-align: center;

    ${(props) =>
    props.secundary &&
    css`
      font-size: 20px;
      margin-bottom: -5%;
    `}
  }
`;
export const Desc = styled.p`
  font-size: 24px;
  font-family: Noto Sans JP;
  max-width: 600px;
  margin-top: 5px;

  @media (max-width: 500px) {
    font-size: 23px;
    margin: 5px;
    text-align: center;
  }
  @media (max-width: 450px) {
    font-size: 17px;
  }
`;
