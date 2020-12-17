import { useState } from "react";
import { useRouter } from 'next/router'
import Image from "next/image";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import {
  Container,
  Texts,
  TitleTop,
  DescTop,
  ContainerImage,
  Card,
  ContainerTextCard,
  Title,
  Desc,
  ButtonMoreDetails,
  ButtonPrev,
  ButtonNext,
  ButtonGoToWorks,
  TextGoToWorks,
  InformationsCard,
  TitleInfo,
  PriceInfo,
  TitleCard,
  DescCard
} from "./styles";
import data from "../../data/teste";

export default function Works() {
  const router = useRouter()
  const [current, setCurrent] = useState(0);
  const length = data.works.length;

  const nextSlide = () => {
    if (current === length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  const prevSlide = () => {
    if (current === 0) {
      setCurrent(length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const ToGoWorksPage = () => {
    router.push("WorksPage")
  }

  if (!Array.isArray(data.works) || data.works.length <= 0) {
    return null;
  }
  return (
    <Container>
      <Texts>
        <TitleTop>Meus trabalhos</TitleTop>
        <DescTop>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum earum
          iure, dolore dolores doloribus fugit?
        </DescTop>
        <ButtonGoToWorks onClick={ToGoWorksPage}>
          <TextGoToWorks>Ver todos os trabalhos</TextGoToWorks>
        </ButtonGoToWorks>
      </Texts>
      {data.works.map((item, index) => (
        <Card
          key={index}
          className={index === current ? "slide active" : "slide"}
        >
          {index === current && (
            <>
              <ContainerImage>
                <Image
                  className="img"
                  quality={10}
                  src={item.img}
                  layout="fill"
                  priority={true}
                />
              </ContainerImage>
              <ContainerTextCard>
                <Title>{item.name}</Title>
                <Desc>{item.description}</Desc>
                <ButtonMoreDetails>Mais detalhes</ButtonMoreDetails>
              </ContainerTextCard>
            </>
          )}
          <InformationsCard>
            <div>
              <TitleInfo>{item.name}</TitleInfo>
              <PriceInfo>R$20.00</PriceInfo>
            </div>
            <div>
              <TitleCard>{item.name}</TitleCard>
              <DescCard>{item.description}</DescCard>
            </div>
          </InformationsCard>
          <ButtonPrev onClick={nextSlide}>
            <BiRightArrow size={30} />
          </ButtonPrev>
          <ButtonNext onClick={prevSlide}>
            <BiLeftArrow size={30} />
          </ButtonNext>
        </Card>
      ))}
    </Container>
  );
}
