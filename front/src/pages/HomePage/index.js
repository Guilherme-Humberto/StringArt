import React from "react";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";
import About from "../../components/About";
import Works from "../Works";
// import styles from "./style.module.css";
import { motion } from "framer-motion";
import {
  Container,
  ContainerHome,
  ContainerTexts,
  ContainerTitle,
  Image,
  Title,
  Desc,
} from "./styles";

export default function HomePage() {
  const router = useRouter();
  const handleWorksPage = () => router.push("Works");

  return (
    <>
      <Container exit={{ opacity: 0 }}>
        <NavBar />
        <ContainerHome>
          <ContainerTexts>
            <ContainerTitle>
              <Title>Nbelê</Title>
              <Title secundary>String Art</Title>
            </ContainerTitle>
            <Desc>
              String Art se trata de uma técnica de artesanato em que os pregos
              que demarcam uma determinada superfície com o contorno da imagem
              desejada, são preenchidos com linhas neutras ou coloridas.
            </Desc>
          </ContainerTexts>
          <Image src="/assets/imgHome.png" />
        </ContainerHome>
      </Container>
      <About />
    </>
  );
}

{
  /* <div className={styles.containerHome}>
  <NavBar />
  <div className={styles.logo}>
    <div className={styles.marcContainer}>
      <p className={styles.marcOne}>Nybelê</p>
      <p className={styles.marcTwo}>String Art</p>
    </div>
    <p className={styles.intro}>
      String Art se trata de uma técnica de artesanato em que os pregos
      que demarcam uma determinada superfície com o contorno da imagem
      desejada, são preenchidos com linhas neutras ou coloridas.
    </p>
    <button className={styles.buttonWorks} onClick={handleWorksPage}>
      Conhecer Trabalhos
    </button>
  </div>
  <div className={styles.imageHome}>
    <Image
      src="/assets/imgHome.png"
      alt="Imagem"
      height={300}
      width={300}
    />
  </div>
</div>

<div className={styles.containerIntro}>
  <div className={styles.cardOne}>
    <div className={styles.img}>
      <Image
        src="/assets/imgIdeas.png"
        quality={100}
        height={350}
        width={350}
      />
    </div>
    <div className={styles.textsOne}>
      <p className={styles.titleOne}>Use sua Imaginação</p>
      <p className={styles.descOne}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Cupiditate explicabo nemo aspernatur commodi corrupti odio nostrum
        quaerat, sapiente ea officiis!
      </p>
    </div>
  </div>

  <div className={styles.cardTwo}>
    <div className={styles.img}>
      <Image src="/assets/imgDelivery.png" height={300} width={400} />
    </div>
    <div className={styles.textsTwo}>
      <p className={styles.titleTwo}>Entrega</p>
      <p className={styles.descTwo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Cupiditate explicabo nemo aspernatur commodi corrupti odio nostrum
        quaerat, sapiente ea officiis!
      </p>
    </div>
  </div>
</div>

<div className={styles.containerDev}>
  <div className={styles.imgDev}>
    <Image
      src="/assets/imgDev.png"
      quality={100}
      height={300}
      width={300}
    />
  </div>
  <div className={styles.textsDevContainer}>
    <p className={styles.titleDev}>
      Quer colocar sua ideia online ou transformar seu negócio?
    </p>
    <p className={styles.descDev}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
      neque optio nobis vitae facere eius repellat a possimus laborum
      doloremque?
    </p>
  </div>
</div>

<div className={styles.containerContact}>
  <h1>Guilherme</h1>
</div> */
}
