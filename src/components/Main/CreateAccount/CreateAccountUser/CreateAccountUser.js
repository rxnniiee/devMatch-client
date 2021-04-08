import React, { useState } from 'react';
import styles from './CreateAccountUser.module.scss';

export default function CreateAccountCompany() {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        console.log('email: ' + email, ', password: ' + password + ', confirmed password: ' + confirmPassword);
    }

    return (
        <div className={styles.CreateAccountUser}>
            <form onSubmit={onSubmitHandler}>

                <h3>Create Account</h3>

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

        </div>
    )
}
