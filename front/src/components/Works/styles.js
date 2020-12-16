import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  place-items: center;
  height: 100%;

  .slide {
    display: none;
  }
  .slide.active {
    display: flex;
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
  width: 130px;
  height: 40px;
  border: 2px solid #333;
  background: transparent;
  /* display: none; */
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: 5px;
  font-family: Noto Sans JP;
  font-weight: bold;
  margin: 10px 0;
`;
export const ButtonNext = styled.button`
  position: absolute;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  left: -4%;
  transform: translate(-50%, -50%);
`;
export const ButtonPrev = styled.button`
  position: absolute;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  right: -4%;
  transform: translate(50%, -50%);
`;
