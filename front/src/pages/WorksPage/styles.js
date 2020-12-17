import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 50px auto;
`;
export const ContainerBackInitialPage = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 10px;
  margin: 20px 0;
`;
export const TextBackInitialPage = styled.p`
  font-size: 18px;
  font-family: Noto Sans JP;
  color: purple;

  :hover {
    font-weight: bold;
    cursor: pointer;
  }
`;
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const TitleTop = styled.p`
  margin: 0;
  font-size: 40px;
  font-family: Noto Sans JP;
  font-weight: bold;
  color: #666;
`;
export const DescTop = styled.p`
  margin: 5px;
  font-size: 25px;
  font-family: Noto Sans JP;
  max-width: 600px;
  color: #666;
`;

export const ContainerCard = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const Card = styled.div`
  position: relative;
  width: 300px;
  height: 340px;
  background: #dfdfdf;
  box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.2);
`;
export const ContainerImg = styled.div`
  position: relative;
  height: 300px;
  .img {
    opacity: 1;
    object-fit: cover;
    object-position: 50% 50%;
    height: 100px;
    width: 100px;
  }
`;
export const Informations = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  background: #eee;
  box-shadow: 0px -10px 20px rgb(0, 0, 0, 0.1);
  transition: 1s ease;

  div:nth-child(1) {
    display: flex;
    width: 100%;
    padding: 0 10px;
    justify-content: space-between;
    align-items: center;
  }
  div:nth-child(2) {
    display: none;
  }

  :hover {
    background: #eee;
    height: 100%;
    transition: 1s ease;

    div:nth-child(1) {
      display: none;
    }
    div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 0 auto;
      flex-direction: column;
    }
  }
`;
export const TitleInfo = styled.p`
  font-size: 16px;
  font-family: Noto Sans JP;
  font-weight: bold;
`;
export const PriceInfo = styled.p`
  font-size: 16px;
  font-family: Roboto;
  font-weight: bold;
  color: purple;
`;
export const TitleCard = styled.p`
  font-size: 20px;
  font-family: Noto Sans JP;
  font-weight: bold;
  margin: 0px;
`;
export const DescCard = styled.p`
  font-size: 14px;
  font-family: Noto Sans JP;
  font-weight: bold;
  margin: 5px;
  max-width: 250px;
`;
