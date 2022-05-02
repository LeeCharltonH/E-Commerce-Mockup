import styles from "./footer.module.scss";

const Footer = (props) => {
  const date = new Date();
  return (
    <footer className={styles.footer}>
      © {date.getFullYear()} Lee Charlton-Hassall
      <br />
      <br />
      Full portolio available at <a href="https://leehassall.com/">leehassall.co.uk</a>
    </footer>
  );
};

export default Footer;
