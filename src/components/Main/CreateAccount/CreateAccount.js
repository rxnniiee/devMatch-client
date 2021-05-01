import React from "react";
import { Link } from "react-router-dom";
import styles from "./CreateAccount.module.scss";
import BackArrow from "../../UI/BackArrow";
const CreateAccount = () => {
  return (
    <div className={styles.CreateAccount}>
      <BackArrow />
      <h2>[LOGO!]</h2>
      <div>
        <h3>I am looking for...</h3>
        <Link to="/create-account/user">
          <button>Work</button>
        </Link>
        <Link to="/create-account/company">
          <button>Employees</button>
        </Link>
      </div>
    </div>
  );
};

export default CreateAccount;
