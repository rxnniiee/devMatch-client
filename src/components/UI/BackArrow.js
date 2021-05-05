import styles from "./BackArrow.module.scss";
import { Link } from "react-router-dom";

const BackArrow = (props) => {
  return (
    <div
      className={`{styles.backArrow} ${props.className ? props.className : ""}`}
    >
      <Link to="/">back</Link>
    </div>
  );
};
export default BackArrow;
