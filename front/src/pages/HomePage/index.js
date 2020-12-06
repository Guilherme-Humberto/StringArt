import { useState } from "react";
import Image from 'next/image'
import Works from "../../components/Modals/Works";
import NavBar from "../../components/NavBar";
import styles from "./style.module.css";

export default function HomePage() {
  const [modal, setModal] = useState(false);

  const handleOpenModalWorks = () => setModal(true);
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.logo}>
        <p className={styles.marc}>String Art</p>
        <p className={styles.intro}>
          String Art se trata de uma técnica de artesanato em que os pregos que
          demarcam uma determinada superfície com o contorno da imagem desejada,
          são preenchidos com linhas neutras ou coloridas.
        </p>
        <button className={styles.buttonWorks} onClick={handleOpenModalWorks}>
          Conhecer Trabalhos
        </button>
      </div>

      <div className="">
        <Image src="/assets/imgHome.png" alt="" height={300} width={300}/>
      </div>

      {modal && <Works setModalWorks={setModal} />}
    </div>
  );
}
