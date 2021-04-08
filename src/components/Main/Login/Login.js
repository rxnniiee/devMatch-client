import React, {useState} from 'react';
import styles from './Login.module.scss';
import { useSelector } from 'react-redux';

const Login = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        console.log('username: ' + username, 'password: ' + password);
    }

    return (
        <div className={styles.Login}>
            <form onSubmit={onSubmitHandler}>
                <h2>[LOGO]</h2>
                <div className={styles.loginInputGroup}>
                    <label htmlFor="username">Username</label>
                    <input required type="text" id="username" name="username"></input>
                </div>
                <div className={styles.loginInputGroup}>
                    <label htmlFor="password">Password</label>
                    <input required type="password" id="password" name="password"></input>
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;