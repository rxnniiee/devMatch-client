import styles from "./BackArrow.module.scss";
import { Link } from "react-router-dom";

const BackArrow = () => {
  return (
    <div className={styles.backArrow}>
      <Link to="/">back</Link>
    </div>
  );
};
export default BackArrow;
