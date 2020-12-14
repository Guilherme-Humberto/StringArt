import { Container, Card, Desc, Image, Title, Texts } from "./styles";

export default function About() {
  return (
    <Container>
      <Card one>
        <Image one src="/assets/imgIdeas.png" />
        <Texts>
          <Title one>Encomende</Title>
          <Desc one>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui dolore
            impedit repellendus cumque quae hic saepe, minima neque explicabo
            alias.
          </Desc>
        </Texts>
      </Card>
      <Card two>
        <Image two src="/assets/imgDelivery.png" />
        <Texts two>
          <Title two>Entrega</Title>
          <Desc two>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui dolore
            impedit repellendus cumque quae hic saepe, minima neque explicabo
            alias.
          </Desc>
        </Texts>
      </Card>
    </Container>
  );
}
