import { AiFillFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { Container, ContainerIntroContact, Image, Title, Desc, Contact, ListContacts } from "./styles";

export default function DevContent() {
  return (
    <Container>
      <ContainerIntroContact>
      <Image src="/assets/imgContact.png" alt="Imagem" />
      <Title>Entre em contato. <br /> Compartilhe nosso trabalho</Title>
      <Desc>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        consequuntur quae laboriosam molestias nulla in!
      </Desc>
      </ContainerIntroContact>
      <ListContacts>
      <Contact>
        <AiFillFacebook color="blue" size={30}/>
        <a href="https://www.facebook.com/cilene.oliveira.319452" target="_blank">Entre em contato com o Facebook</a>
      </Contact>
      <Contact>
        <AiOutlineWhatsApp color="green" size={30}/>
        <a>(11) 96138-3139</a>
      </Contact>
      <Contact>
        <AiOutlineInstagram color="black" size={30}/>
        <a href="https://www.instagram.com/cilene.oliveira.arts?r=nametag" target="_blank">Entre em contato pelo Instagram</a>
      </Contact>
      </ListContacts>
    </Container>
  );
}
