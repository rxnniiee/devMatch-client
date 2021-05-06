import React from "react";
import { Link } from "react-router-dom";
import styles from "./CreateAccount.module.scss";
import BackArrow from "../../UI/BackArrow";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import Logo from "../../UI/Logo.svg";
const CreateAccount = () => {
  return (
    <Card className={styles.CreateAccount}>
      <BackArrow className={styles.arrow} />
      <>
        <img src={Logo} alt="job up" />
        <h3>I am looking for...</h3>
        <Link to="/create-account/user">
          <Button>Work</Button>
        </Link>
        <Link to="/create-account/company">
          <Button>Employees</Button>
        </Link>
      </>
    </Card>
  );
};

export default CreateAccount;
