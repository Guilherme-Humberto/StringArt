import React from "react";
import Image from 'next/image'
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";

import {
  Container,
  ContainerHome,
  ContainerTexts,
  ContainerTitle,
  ContainerImage,
  Title,
  Desc,
} from "./styles";

export default function HomePage() {
  return (
    <>
      <Container>
        <NavBar />
        <ContainerHome>
          <ContainerTexts>
            <ContainerTitle>
              <Title>Nybelê</Title>
              <Title secundary>String Art</Title>
            </ContainerTitle>
            <Desc>
              String Art se trata de uma técnica de artesanato em que os pregos
              que demarcam uma determinada superfície com o contorno da imagem
              desejada, são preenchidos com linhas neutras ou coloridas.
            </Desc>
          </ContainerTexts>
          <ContainerImage>
            <Image 
              src="/assets/imgHome.png" 
              layout="fill" 
              quality={10}
              priority={true}
            />
          </ContainerImage>
        </ContainerHome>
      </Container>
    </>
  );
}
