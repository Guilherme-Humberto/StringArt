import Image from "next/image";
import { useRouter } from "next/router";
import { BsArrowLeft } from 'react-icons/bs'
import {
  Container,
  ContainerCard,
  Texts,
  TitleTop,
  DescTop,
  Card,
  ContainerImg,
  Informations,
  TitleCard,
  TitleInfo,
  DescCard,
  PriceInfo,
  ContainerBackInitialPage,
  TextBackInitialPage
} from "./styles";
import data from "../../data/teste";

export default function WorksPage() {
  const router = useRouter()

  const backToGoHome = () => {
    router.push("/").then(() => router.reload())
  }
  return (
    <>
      <Container>
      <Texts>
        <TitleTop>Trabalhos</TitleTop>
        <DescTop>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, corporis?</DescTop>
      </Texts>
      <ContainerBackInitialPage onClick={backToGoHome}>
        <BsArrowLeft size={30} color="purple"/>
        <TextBackInitialPage>Voltar para página inicial</TextBackInitialPage>
      </ContainerBackInitialPage>
      <ContainerCard>
      {data.works.map((item, index) => (
        <Card key={index}>
          <ContainerImg>
            <Image
              quality={10}
              className="img"
              src={item.img}
              layout="fill"
              priority={true}
            />
          </ContainerImg>
          <Informations>
            <div>
              <TitleInfo>{item.name}</TitleInfo>
              <PriceInfo>R$20.00</PriceInfo>
            </div>
            <div>
              <TitleCard>{item.name}</TitleCard>
              <DescCard>{item.description}</DescCard>
            </div>
          </Informations>
        </Card>
      ))}
      </ContainerCard>
    </Container>
    </>
  );
}
