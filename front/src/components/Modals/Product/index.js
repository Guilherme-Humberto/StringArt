import { motion } from 'framer-motion'
import { MdClose } from 'react-icons/md'
import styles from "./style.module.css";

export default function ModalProduct({ item, setModal }) {
  return (
    <motion.div 
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container} 
      onClick={() => setModal(false)}
    >
      <div className={styles.card}>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.buttonClose} 
          onClick={() => setModal(false)}
        >
          <MdClose size={28} color="#121212"/>
        </motion.button>
          <img
            className={styles.imgCard}
            src={item.img}
          />
          <div className={styles.aboutConaitaner}>
            <p className={styles.nameProduct}>{item.name}</p>
            <p className={styles.descProduct}>{item.description}</p>
          </div>
      </div>
    </motion.div>
  );
}
