import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <div type={props.type} onClick={props.onClick} className={styles.button} disabled={props.disabled}>
      {props.children}
    </div>
  );
};

export default Button;
