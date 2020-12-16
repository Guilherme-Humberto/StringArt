import { useState, useEffect } from "react";
import Image from "next/image";
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

import {
  Container,
  Card,
  ContainerTextCard,
  Title,
  Desc,
  ButtonMoreDetails,
  ButtonPrev,
  ButtonNext
} from "./styles";
import data from "../../data/teste";

export default function Works() {
  const [current, setCurrent] = useState(0);
  const length = data.works.length;

  const nextSlide = () => {
    if(current === length - 1) {
        setCurrent(0)
    } else {
        setCurrent(current + 1)
    }
  };
  const prevSlide = () => {
    if(current === length - 1) {
        setCurrent(0)
    } else {
        setCurrent(current - 1)
    }
  };
  if (!Array.isArray(data.works) || data.works.length <= 0) {
    return null;
  }
  return (
    <Container>
      {data.works.map((item, index) => (
        <Card key={index} className={index === current ? "slide active" : "slide"}>
          {index === current && (
            <>
              <Image
                className="img"
                quality={30}
                src={item.img}
                height={400}
                width={400}
                priority
              />
              <ContainerTextCard>
                <Title>{item.name}</Title>
                <Desc>{item.description}</Desc>
                <ButtonMoreDetails>Mais detalhes</ButtonMoreDetails>
              </ContainerTextCard>
            </>
          )}
          <ButtonPrev onClick={nextSlide}>
            <BiRightArrow size={30}/>
          </ButtonPrev>
          <ButtonNext onClick={prevSlide}>
            <BiLeftArrow size={30} />
          </ButtonNext>
        </Card>
      ))}
    </Container>
  );
}
