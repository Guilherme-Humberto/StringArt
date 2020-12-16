import { Container, Text, ContainerButtons, ButtonKnowMore } from "./styles";

export default function Footer({ setIsFooterAcitve }) {
  const handleCloseModal = () => setIsFooterAcitve(false)
  
  return (
    <Container
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Text>
        Crie um site pessoal ou um catálogo online para seu negócio.
      </Text>

      <ContainerButtons>
      <ButtonKnowMore
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Saiba Mais
      </ButtonKnowMore>
      <ButtonKnowMore
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleCloseModal}
      >
        Mais Tarde
      </ButtonKnowMore>
      </ContainerButtons>

    </Container>
  );
}
