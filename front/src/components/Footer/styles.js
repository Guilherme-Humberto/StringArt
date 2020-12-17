import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  background: #333;
  /* background-image: linear-gradient(200deg, #af2896, #509bf5); */
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 17px;
    text-align: center;

    p:nth-child(1) {
      font-size: 14px;
    }
    button {
      width: 100px;
      font-size: 12px;
    }
  }
`;

export const Text = styled.p`
  color: #eee;
  font-family: Noto Sans JP;
  font-weight: bold;
`
export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const ButtonKnowMore = styled(motion.button)`
  background: transparent;
  border: 2px solid #eee;
  padding: 10px;
  height: 30px;
  width: 140px;
  max-width: 200px;
  color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Noto Sans JP;
  font-weight: bold;
  outline: none;

  :hover {
    background: #eee;
    color: #333;
    cursor: pointer;
  }
`