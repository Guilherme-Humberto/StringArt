import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 100px auto;
`;

export const ContainerIntroContact = styled.div`
  max-height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    img {
      height: 280px;
    }
    p:nth-child(2) {
      font-size: 30px;
    }
    p:nth-child(3) {
      font-size: 17px;
    }
  }
`;
export const Image = styled.img`
  height: 350px;
`;
export const Title = styled.p`
  font-size: 40px;
  font-family: Noto Sans JP;
  font-weight: bold;
  margin: 0;
  letter-spacing: -2px;
  text-align: center;
  max-width: 570px;
`;
export const Desc = styled.p`
  text-align: center;
  font-size: 20px;
  font-family: Noto Sans JP;
  margin: 5px 0;
  max-width: 700px;
`;
export const ListContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0;
`;
export const Contact = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  a {
    font-size: 17px;
    font-family: Noto Sans JP;
    font-weight: bold;
  }
  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
