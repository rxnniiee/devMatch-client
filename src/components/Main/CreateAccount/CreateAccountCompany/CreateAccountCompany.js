import React, { useState } from "react";
import styles from "./CreateAccountCompany.module.scss";
import { Link } from "react-router-dom";
import Button from "../../../UI/Button";

export default function CreateAccountCompany() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log(
      "email: " + email,
      ", password: " + password + ", confirmed password: " + confirmPassword
    );
  };

  return (
    <div className={styles.CreateAccountUser}>
      <div className={styles.backArrow}>
        <Link to="/create-account">back</Link>
      </div>
      <form onSubmit={onSubmitHandler}>
        <h3>Create Account</h3>

        <div className={styles.loginInputGroup}>
          <label htmlFor="email">Email*</label>
          <input
            required
            type="email"
            placeholder="Email"
            id="email"
            name="email"
          ></input>
        </div>

        <div className={styles.loginInputGroup}>
          <label htmlFor="password">Password*</label>
          <input
            required
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          ></input>
        </div>

        <div className={styles.loginInputGroup}>
          <label htmlFor="confrim-password">Confirm Password*</label>
          <input
            required
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            name="confirm-password"
          ></input>
        </div>

        <Link to="create-profile">
          <Button>Create Account</Button>
        </Link>
      </form>
    </div>
  );
}
