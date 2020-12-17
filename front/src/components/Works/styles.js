import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 100px auto;

  .slide {
    display: none;
  }
  .slide.active {
    display: flex;
  }
`;
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  @media (max-width: 500px) {
    p:nth-child(2) {
      font-size: 17px;
      margin: 5px;
    }
  }
`;
export const TitleTop = styled.p`
  font-family: Noto Sans JP;
  font-weight: bold;
  font-size: 35px;
  color: #666;
  margin: 0;
`;
export const DescTop = styled.p`
  font-family: Noto Sans JP;
  font-weight: bold;
  font-size: 20px;
  max-width: 600px;
  color: #666;
  margin: 5px 0;
`;
export const ButtonGoToWorks = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
`;
export const TextGoToWorks = styled.p`
  font-family: Noto Sans JP;
  color: purple;
  font-size: 20px;

  :hover {
    cursor: pointer;
    font-weight: bold;
  }
`;
export const Card = styled.div`
  position: relative;
  height: 400px;
  width: 67%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
  border: none;
  box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.2);

  .img {
    opacity: 1;
    object-fit: scale-down;
    object-position: left;

    @media (max-width: 1000px) {
      object-fit: cover;
      object-position: 50% 50%;
    }
  }

  @media (max-width: 500px) {
    height: 300px;
  }
  @media (max-width: 450px) {
    height: 250px;
  }
`;
export const ContainerImage = styled.div`
  position: relative;
  height: 100%;
  width: 400px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
export const ContainerTextCard = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: right;
  padding-right: 5%;
  justify-content: right;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 1300px) {
    p:nth-child(1) {
      font-size: 30px;
    }
    p:nth-child(2) {
      font-size: 20px;
      max-width: 300px;
    }
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Title = styled.p`
  font-size: 40px;
  text-align: right;
  font-family: Noto Sans JP;
  font-weight: bold;
  max-width: 450px;
  margin: 0;
`;
export const Desc = styled.p`
  font-size: 25px;
  font-family: Noto Sans JP;
  /* display: none; */
  margin: 5px 0;
  max-width: 400px;
`;
export const ButtonMoreDetails = styled.button`
  max-width: 180px;
  height: 40px;
  border: 2px solid #333;
  background: transparent;
  /* display: none; */
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border-radius: 5px;
  padding: 0 10px;
  font-family: Noto Sans JP;
  font-weight: bold;
  margin: 10px 0;
  outline: none;

  :hover {
    background: #333;
    color: #eee;
    border: transparent;
  }
`;
export const ButtonNext = styled.button`
  position: absolute;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  left: -4%;
  transform: translate(-50%, -50%);

  @media (max-width: 450px) {
    left: -10%;
  }
`;
export const ButtonPrev = styled.button`
  position: absolute;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  right: -4%;
  transform: translate(50%, -50%);

  @media (max-width: 450px) {
    right: -10%;
  }
`;

export const InformationsCard = styled.div`
  position: absolute;
  z-index: 1;
  background: #fff;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 35px;
  display: none;
  transition: 1s ease;

  @media (max-width: 1000px) {
    display: flex;

    div:nth-child(1) {
      display: flex;
      width: 100%;
      padding: 10px;
      align-items: center;
      justify-content: space-between;
    }

    div:nth-child(2) {
      display: none;
    }

    :hover {
      height: 100%;
      background: #eee;

      div:nth-child(1) {
        display: none;
      }
      div:nth-child(2) {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        transition: 1s ease;
      }
    }
  }
`
export const TitleInfo = styled.p`
  font-size: 16px;
  font-family: Noto Sans JP;
  font-weight: bold;
`
export const PriceInfo = styled.p`
  font-size: 16px;
  font-family: Roboto;
  font-weight: bold;
  color: purple;
`
export const TitleCard = styled.p`
  font-size: 20px;
  font-family: Noto Sans JP;
  font-weight: bold;
  margin: 0px;
`
export const DescCard = styled.p`
  font-size: 14px;
  font-family: Noto Sans JP;
  font-weight: bold;
  margin: 5px;
  max-width: 250px;
`