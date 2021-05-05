import React from "react";
import { Link } from "react-router-dom";
import styles from "./CreateAccount.module.scss";
import BackArrow from "../../UI/BackArrow";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
const CreateAccount = () => {
  return (
    <Card className={styles.CreateAccount}>
      <BackArrow className={styles.arrow} />
      <div>
        <h2>[LOGO!]</h2>
        <h3>I am looking for...</h3>
        <Link to="/create-account/user">
          <Button>Work</Button>
        </Link>
        <Link to="/create-account/company">
          <Button>Employees</Button>
        </Link>
      </div>
    </Card>
  );
};

export default CreateAccount;
