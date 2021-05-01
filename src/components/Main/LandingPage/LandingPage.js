import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.scss";
import Card from "../../UI/Card";

const LandingPage = () => {
  return (
    <Card className={styles.LandingPage}>
      <h2>[LOGO]</h2>
      <Link to="/create-account">
        <button>Create Account</button>
      </Link>
      <Link to="/login">
        <button>Sign In</button>
      </Link>
    </Card>
  );
};

export default LandingPage;
