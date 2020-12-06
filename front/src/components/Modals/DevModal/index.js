import { motion } from "framer-motion";
import styles from "./style.module.css";

export default function DevModal() {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <h1>Guilherme</h1>
    </motion.div>
  );
}
