import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  flex-direction: column;
`;

export const Card = styled.div`
  background: #edf2fb;
  border: none;
  border-radius: 10px;
  max-width: 500px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 2% 0;
  justify-content: space-around;
  min-width: 100%;

  @media (max-width: 500px) {
    min-width: 50%;
  }
`
export const Texts = styled.div`
  display: block;
  max-width: 600px;
  text-align: right;

  @media (max-width: 500px) {
    max-width: 400px;
  }

  ${props => props.two && css`
    text-align: left;
    display: block;
    max-width: 600px;

    @media (max-width: 500px) {
      order: 1;
    }
  `}
`
export const Title = styled.p`
  ${props => props.one && css`
    font-size: 40px;
    font-family: Roboto;
    margin-bottom: 0;
    color: #03045e;

    @media (max-width: 500px) {
      font-size: 34px;
    }
  `}
  ${props => props.two && css`
    font-size: 40px;
    font-family: Roboto;
    margin-bottom: 0;
    color: #03045e;

    @media (max-width: 500px) {
      font-size: 34px;
    }
  `}
`
export const Desc = styled.p`
  ${props => props.one && css`
    font-size: 20px;
    font-family: Noto Sans JP;
    margin-top: 5px;
    margin-bottom: 0;
    color: #03045e;

    @media (max-width: 500px) {
      font-size: 17px;
    }
  `}
  ${props => props.two && css`
    font-size: 20px;
    font-family: Noto Sans JP;
    margin-top: 5px;
    margin-bottom: 0;
    color: #03045e;

    @media (max-width: 500px) {
      font-size: 17px;
    }
  `}
`
export const Image = styled.img`
  ${props => props.one && css`
    height: 340px;
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