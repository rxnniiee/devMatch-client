import React, { useState } from "react";
import styles from "./CreateAccountCompany.module.scss";
import { Link } from "react-router-dom";

export default function CreateAccountCompany() {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const company = e.target.company.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        console.log('company:' + company, ', email: ' + email, ', password: ' + password + ', confirmed password: ' + confirmPassword);
    }

    return (
        <div className={styles.CreateAccountCompany}>
            <form onSubmit={onSubmitHandler}>

                <h3>Create Account</h3>

                <div className={styles.loginInputGroup}>
                    <label htmlFor="company">Company*</label>
                    <input required type="text" id="company" name="company"></input>
                </div>

                <div className={styles.loginInputGroup}>
                    <label htmlFor="email">Email*</label>
                    <input required type="email" id="email" name="email"></input>
                </div>

                <div className={styles.loginInputGroup}>
                    <label htmlFor="password">Password*</label>
                    <input required type="password" id="password" name="password"></input>
                </div>

                <div className={styles.loginInputGroup}>
                    <label htmlFor="confrim-password">Confirm Password*</label>
                    <input required type="password" id="confirmPassword" name="confirm-password"></input>
                </div>

                <button>Create Account</button>

            </form>

        <div className={styles.loginInputGroup}>
          <label htmlFor="password">Password*</label>
          <input required type="password" id="password" name="password"></input>
        </div>

        <div className={styles.loginInputGroup}>
          <label htmlFor="confrim-password">Confirm Password*</label>
          <input
            required
            type="password"
            id="confirmPassword"
            name="confirm-password"
          ></input>
        </div>

        <Link to="create-profile">
          <button>Create Account</button>
        </Link>
    </div>
  );
}
