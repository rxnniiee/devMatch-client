import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <div type={props.type} className={styles.button} disabled={props.disabled}>
      {props.children}
    </div>
  );
};

export default Button;
