import styles from "./index.module.css";

export default function NavBar() {
  return (
    <div className={styles.containerNavBarTop}>
      <p className={styles.logoNav}>Cilene Oliveira</p>
      <div className={styles.containerNavBar}>
        <a className={styles.nav} href="#infos">Informações</a>
        <a className={styles.nav} href="#contact">Contatos</a>
      </div>
    </div>
  );
}
