import { Container } from './styles'

export default function DevModal() {
  return (
    <Container
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <h1>Guilherme</h1>
    </Container>
  );
}
