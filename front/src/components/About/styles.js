import styled, { css } from 'styled-components';

export const Container = styled.div`
  /* max-width: 1100px; */
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 100px auto;
`;

export const Card = styled.div`
  background: #f8f9fa;
  border: none;
  max-width: 700px;
  width: 500px;
  height: 300px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 2% 0;
  border-radius: 5px;
  box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.1);
  justify-content: space-around;

  @media (max-width: 500px) {
    min-width: 50%;
  }
`
export const Texts = styled.div`
  display: block;
  max-width: 400px;

  @media (max-width: 500px) {
    max-width: 400px;
  }

  ${props => props.two && css`
    text-align: left;
    display: block;
    max-width: 400px;

    @media (max-width: 500px) {
      order: 1;
    }
  `}
`
export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  gap: 0 10px;
`
export const Title = styled.p`
  ${props => props.one && css`
    font-size: 35px;
    margin: 0;
    font-family: Noto Sans JP;
    font-weight: bold;

    @media (max-width: 500px) {
      font-size: 34px;
    }
  `}
  ${props => props.two && css`
    font-size: 35px;
    font-family: Noto Sans JP;
    font-weight: bold;
    margin: 0;

    @media (max-width: 500px) {
      font-size: 34px;
    }
  `}
`
export const Desc = styled.p`
  ${props => props.one && css`
    font-size: 17px;
    font-family: Noto Sans JP;
    margin-top: 5px;
    margin-bottom: 0;

    @media (max-width: 500px) {
      font-size: 17px;
    }
  `}
  ${props => props.two && css`
    font-size: 17px;
    font-family: Noto Sans JP;
    margin-top: 5px;
    margin-bottom: 0;

    @media (max-width: 500px) {
      font-size: 17px;
    }
  `}
`
export const Image = styled.img`
  opacity: 0.8;
  ${props => props.one && css`
    height: 390px;
  `}

  ${props => props.two && css`
    order: 2;
    height: 300px;

    @media (max-width: 500px) {
      order: 1;
      max-height: 200px;
    }
  `}

  @media (max-width: 500px) {
    height: 300px;
  }
  
`