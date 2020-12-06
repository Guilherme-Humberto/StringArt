import { motion } from "framer-motion";

import { 
  AiOutlineFacebook, 
  AiOutlineInstagram, 
  AiOutlineWhatsApp, 
  AiOutlineMail,
  AiOutlineCloseSquare
} from "react-icons/ai";

import styles from "./style.module.css";

export default function Contact({ setModal }) {
  const handleCloseModal = () => setModal(false)
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <button className={styles.buttonClose} onClick={handleCloseModal}>
        <AiOutlineCloseSquare size={40} color="rgb(206, 203, 203)" />
      </button>
      <div className={styles.texts}>
        <p className={styles.title}>Contato</p>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
          recusandae
        </p>

        <div className={styles.contactscontainer}>
          <div className={styles.itemContact}>
            <AiOutlineFacebook size={25} color="rgb(206, 203, 203)"/>
            <a href={"https://www.facebook.com/cilene.oliveira.319452"} target="_blank" className={styles.item}>Facebook</a>
          </div>
          <div className={styles.itemContact}>
            <AiOutlineInstagram size={25} color="rgb(206, 203, 203)"/>
            <a  href={"https://www.instagram.com/cilene.oliveira.arts?r=nametag"} target="_blank" className={styles.item}>Instagram</a>
          </div>
          <div className={styles.itemContact}>
            <AiOutlineMail size={25} color="rgb(206, 203, 203)"/>
            <a className={styles.item}>OliveiraCileneCristina@gmail.com</a>
          </div>
          <div className={styles.itemContact}>
            <AiOutlineWhatsApp size={25} color="rgb(206, 203, 203)"/>
            <p className={styles.item}>WhatsApp: (11) 96138-3139</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
