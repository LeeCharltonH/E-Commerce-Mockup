import styles from "./footer.module.scss";

const Footer = (props) => {
  const date = new Date();
  return (
    <footer className={styles.footer}>© {date.getFullYear()} Nook Shop</footer>
  );
};

export default Footer;
