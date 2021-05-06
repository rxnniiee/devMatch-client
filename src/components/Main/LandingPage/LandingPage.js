import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.scss";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import Logo from "../../UI/Logo.svg";

const LandingPage = () => {
  return (
    <Card className={styles.LandingPage}>
      <img src={Logo} alt="job up" />
      <Link to="/create-account">
        <Button className="styles">CREATE ACCOUNT</Button>
      </Link>
      <Link to="/login">
        <Button className>SIGN IN</Button>
      </Link>
    </Card>
  );
};

export default LandingPage;
