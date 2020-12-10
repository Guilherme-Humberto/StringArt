import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from 'next/image'
import data from '../../data/teste'

import styles from "./styles.module.css";
import ModalProduct from "../../components/Modals/Product/index";

export default function Works() {
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
  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.container}
      >
        {/* <div className={styles.containerTexts}>
          <p className="">Meus Trabalhos</p>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, reiciendis.</p>
        </div> */}
        <div className={styles.containerList}>
          {data.works.map((item, index) => (
            <div className={styles.card} key={index}>
              <Image 
                className={styles.imgCard} 
                src={item.img} 
                quality={40} 
                width={250} 
                height={250} 
                alt="Imagem" 
              />
              <p className={styles.titleCard}>{item.name}</p>
              {/* <p className={styles.descCard}>{item.description}</p> */}
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
