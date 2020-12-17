import styled from "styled-components";
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  overflow-y: scroll;
  height: 100%;
  width: 40%;
  background: #8ecae6;
  box-shadow: 10px 0px 20px rgb(0, 0, 0, 0.9);

  ::-webkit-scrollbar {
    background: transparent;
  }
`;
