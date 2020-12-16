import { GiPresent } from 'react-icons/gi'
import { BiBrain } from 'react-icons/bi'
import { Container, Card, Desc, Image, ContainerTitle, Title, Texts } from "./styles";

export default function About() {
  return (
    <Container>
      <Card one>
        <Texts>
          <ContainerTitle>
            <BiBrain size={40}/>
            <Title one>Ideias</Title>
          </ContainerTitle>
          <Desc one>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui dolore
            impedit repellendus cumque quae hic saepe, minima neque explicabo
            alias.
          </Desc>
        </Texts>
      </Card>
      <Card two>
        <Texts two>
          <ContainerTitle>
            <GiPresent size={40}/>
            <Title two>Entrega</Title>
          </ContainerTitle>
          <Desc two>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui dolore
            impedit repellendus cumque quae hic saepe, minima neque explicabo
            alias.
          </Desc>
        </Texts>
      </Card>
      {/* <Card two>
        <Texts two>
          <Title two>Criação</Title>
          <Desc two>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui dolore
            impedit repellendus cumque quae hic saepe, minima neque explicabo
            alias.
          </Desc>
        </Texts>
      </Card>
      <Card two>
        <Texts two>
          <Title two>Entrega</Title>
          <Desc two>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui dolore
            impedit repellendus cumque quae hic saepe, minima neque explicabo
            alias.
          </Desc>
        </Texts>
      </Card> */}
    </Container>
  );
}
