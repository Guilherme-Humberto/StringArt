import { useState } from "react";
import { motion } from "framer-motion";
// import styles from "./style.module.css";
import { 
  Container,
  ContainerNav,
  Logo,
  Nav
 } from './styles'

// import Contact from "../Modals/Contact";
// import DevModal from "../Modals/DevModal";

export default function NavBar() {
  // const [modalContact, setModalContact] = useState(false);
  // const [modalDev, setModalDev] = useState(false);

  // const handleOpenModalContact = () => {
  //   setModalContact(true)
  //   setModalDev(false)
  // }
  // const handleOpenModalDev = () => {
  //   setModalDev(true)
  //   setModalContact(false)
  // }
  return (
    <Container>
      <Logo>Cilene Oliveira</Logo>
      <ContainerNav>
        <Nav>Trabalhos</Nav>
        <Nav>Contate-nos</Nav>
        <Nav>Crie seu site</Nav>
      </ContainerNav>
    </Container>
    // <>
    //   <motion.div
    //     initial={{ y: "-100%" }}
    //     animate={{ y: 0 }}
    //     transition={{ duration: 0.5 }}
    //     className={styles.container}
    //   >
    //     <div className={styles.logo}>
    //       <p className={styles.textLogo}>Cilene Oliveira</p>
    //     </div>

    //     <div className={styles.containerNav}>
    //       {/* <p className={styles.nav}>Trabalhos</p> */}
    //       <p className={styles.nav} onClick={handleOpenModalContact}>Contate-nos</p>
    //       <p className={styles.nav} onClick={handleOpenModalDev}>Crie seu site</p>
    //     </div>
    //   </motion.div>
    //   {modalContact && <Contact setModal={setModalContact}/>}
    //   {modalDev && <DevModal />}
    // </>
  );
}
