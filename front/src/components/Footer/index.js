import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import ModalDev from "../Modals/ModalDev/index";

export default function Footer() {
  const [modalDev, setModalDev] = useState(false);

  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.containerFooter}
      >
        <p className={styles.title}>
          Crie um site pessoal ou um catálogo online para seu negócio.
        </p>
        <div className={styles.containerButtons}>
          <button className={styles.button} onClick={() => setModalDev(true)}>Saber Mais</button>
          <button className={styles.button}>Mais Tarde</button>
        </div>
      </motion.div>

      {modalDev && (<ModalDev closeModal={setModalDev}/>)}
    </>
  );
}
