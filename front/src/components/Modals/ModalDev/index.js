import { motion } from "framer-motion";
import { CgCloseO } from 'react-icons/cg'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { HiOutlineMail } from "react-icons/hi";
import styles from "./index.module.css";

export default function ModalDev({ closeModal }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className={styles.containerModal}
    >
      <button className={styles.buttonClose} onClick={() => closeModal(false)}><CgCloseO size={35}/></button>
      <img className={styles.image} src="/assets/imgDev.jpg" alt=""/>
      <p className={styles.titleModal}>Coloque sua ideia online :)</p>
      <p className={styles.descModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
        provident ratione obcaecati rem! Itaque nemo, eos eligendi fuga dolores
        et molestiae consectetur aut id sequi!
      </p>
      <div className={styles.containerAllContacts}>
        <div className={styles.contactBox}>
          <HiOutlineMail size={30} color="#333"/> 
          <p className={styles.contactText}>guilhermehumbertodev@outlook.com</p>
        </div>
        <div className={styles.contactBox}>
          <AiOutlineWhatsApp size={30} color="green"/> 
          <p className={styles.contactText}>(11) 98533-9540</p>
        </div>
      </div>
    </motion.div>
  );
}
