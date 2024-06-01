import Link from "next/link";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/">MKS sistemas © Todos os direitos reservados</Link>
    </footer>
  );
};
