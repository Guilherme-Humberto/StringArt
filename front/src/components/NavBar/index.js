import { Container, ContainerNav, Logo, Nav, ContainerMobileNavBar, TitleMobile } from "./styles";

export default function NavBar() {
  return (
    <>
      <Container>
        <Logo>Cilene Oliveira</Logo>
        <ContainerNav>
          <Nav>Informações</Nav>
          <Nav>Trabalhos</Nav>
          <Nav>Contate-nos</Nav>
        </ContainerNav>
      </Container>
      <ContainerMobileNavBar>
        <TitleMobile>Cilene Oliveira</TitleMobile>
      </ContainerMobileNavBar>
    </>
  );
}
