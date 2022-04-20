import styles from "./button.module.scss";

export const Button = (props) => {
  return (
    <button type={props.type} onClick={props.onClick} className={styles.button}>
      {props.children}
    </button>
  );
};
