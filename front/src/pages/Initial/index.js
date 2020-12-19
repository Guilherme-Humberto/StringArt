import { useState, useEffect } from "react";
import { GiPresent } from "react-icons/gi";
import { BiBrain } from "react-icons/bi";
import Link from 'next/link'

import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import styles from "./index.module.css";
import NavBar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";

export default function Initial() {
  const [modalFooter, setModalFooter] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setModalFooter(true);
    }, 2000);
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles.containerInitial}>
        <div className={styles.logoContainer}>
          <p className={styles.logoOne}>Nybelê</p>
          <p className={styles.logoTwo}>String Art</p>
        </div>
        <p className={styles.descLogo}>
          String Art se trata de uma técnica de artesanato em que os pregos que
          demarcam uma determinada superfície com o contorno da imagem desejada,
          são preenchidos com linhas neutras ou coloridas.
        </p>
        <Link as="/Works" href="/Works">
          <button className={styles.buttonToGoWorks}>Meus Trabalhos</button>
        </Link>
      </div>

      <div id="infos" className={styles.containerInformations}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <BiBrain size={35} color="#333" />
          </div>
          <div className={styles.containerTitle}>
            <p className={styles.titleCard}>Ideias</p>
          </div>
          <p className={styles.descCard}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            temporibus repudiandae quia tempora sunt voluptas blanditiis rerum
            commodi esse in.
          </p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.card}>
          <div className={styles.icontwo}>
            <GiPresent size={35} color="#333" />
          </div>
          <div className={styles.containerTitle}>
            <p className={styles.titleCard}>Entrega</p>
          </div>
          <p className={styles.descCard}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            temporibus repudiandae quia tempora sunt voluptas blanditiis rerum
            commodi esse in.
          </p>
        </div>
      </div>

      <div id="contact" className={styles.containerContact}>
        <img
          className={styles.imageContact}
          src="/assets/imgContact.png"
          alt="Imagem"
        />
        <p className={styles.titleContact}>
          Entre em contato. <br />
          Compartilhe nosso trabalho
        </p>
        <p className={styles.descContact}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          voluptatibus maxime sit esse obcaecati ut repellendus molestiae,
          debitis neque minima.
        </p>

        <div className={styles.containerContacts}>
          <div>
            <div className={styles.contactBox}>
              <AiFillFacebook color="blue" size={30} />
              <a
                className={styles.textContact}
                href="https://www.facebook.com/cilene.oliveira.319452"
                target="_blank"
              >
                Entre em contato com o Facebook
              </a>
            </div>
            <div className={styles.contactBox}>
              <AiOutlineInstagram color="black" size={30} />
              <a
                className={styles.textContact}
                href="https://www.instagram.com/cilene.oliveira.arts?r=nametag"
                target="_blank"
              >
                Entre em contato pelo Instagram
              </a>
            </div>
            <div className={styles.contactBox}>
              <AiOutlineWhatsApp color="green" size={30} />
              <a className={styles.textContact}>(11) 96138-3139</a>
            </div>
          </div>
        </div>
      </div>

      {modalFooter && <Footer />}
    </>
  );
}
