import styled from "styled-components";
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  position: fixed;
  z-index: 2;
  top: 0px;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
  padding: 0 10%;
  box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.1);

  @media (max-width: 620px) {
    display: none;
  }
  @media (max-width: 400px) {
    height: auto;
  }
`;

export const Logo = styled.p`
  font-size: 30px;
  font-family: Caveat;
  font-weight: bold;

  @media (max-width: 500px) {
    display: none;
  }
`;
export const ContainerNav = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 500px) {
    margin: 0 auto;
  }
  @media (max-width: 400px) {
    gap: 0px;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;
export const Nav = styled.p`
  font-size: 20px;
  font-family: Roboto;
  font-weight: bold;

  :hover {
      text-decoration: underline;
      cursor: pointer;
  }

  @media (max-width: 500px) {
    font-size: 17px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
    margin: 5px 0;
  }
`;

export const ContainerMobileNavBar = styled.div`
  position: fixed;
  z-index: 1;
  background: #f8f9fa;
  box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.1);
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  display: none;

  @media (max-width: 620px) {
    display: flex;
  }
`

export const TitleMobile = styled.p`
  font-size: 30px;
  font-family: Caveat;
  font-weight: bold;
`