import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BiDownArrow } from "react-icons/bi";
import data from '../../../data/teste'

import styles from "./styles.module.css";
import ModalProduct from "../Product/index";

export default function Works({ setModalWorks }) {
  const [modal, setModal] = useState(false);
  const [img, setImg] = useState([]);
  const [item, setItem] = useState([]);
  console.log(data.works)

  const imagesArray = [];
  for (var x = 0; x < 8; x++) {
    imagesArray.push(`https://picsum.photos/250/250?random=${x}`);
  }

  useEffect(() => {
    setImg(imagesArray);
  }, []);

  function teste(item) {
    setItem(item);
    setModal(true);
  }

  const handleCloseModal = () => setModalWorks(false)

  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4 }}
        className={styles.container}
      >
        <button 
          className={styles.buttonCloseModal} 
          onClick={handleCloseModal}
        >
          <BiDownArrow size={28} />
        </button>
        <div className={styles.containerList}>
          {data.works.map((item, index) => (
            <div className={styles.card} key={index}>
              <img className={styles.imgCard} src={item.img} alt="Imagem" />
              <p className={styles.titleCard}>{item.name}</p>
              <p className={styles.descCard}>{item.description}</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.linkContainer}
                onClick={() => teste(item)}
              >
                Mais detalhes
              </motion.button>
            </div>
          ))}
        </div>
      </motion.div>
      {modal && <ModalProduct item={item} setModal={setModal} />}
    </>
  );
}
