import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';

const Login = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        console.log('username: ' + username, 'password: ' + password);
    }

    return (
        <div className={styles.Login}>
            <form>
            <div className={styles.backArrow}><Link to="/">back</Link></div>
                <h3>Sign In</h3>
                <div className={styles.loginInputGroup}>
                    <label htmlFor="username">Username</label>
                    <input required type="text" id="username" name="username"></input>
                </div>
                <div className={styles.loginInputGroup}>
                    <label htmlFor="password">Password</label>
                    <input required type="password" id="password" name="password"></input>
                </div>
            </form>
            <button onClick={onSubmitHandler}>Sign In</button>
        </div>
    )
}

export default Login;