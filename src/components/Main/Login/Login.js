import React, {useState} from 'react';
import styles from './Login.module.scss';
import { useSelector } from 'react-redux';

const Login = () => {
    const employees = useSelector((state) => state.employees)
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const usernameOnChangeHandler = (e) => {
        setUsername(e.target.value);
    }

    const passwordOnChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('username: ' + username, 'password: ' + password);
    }

    return (
        <div className={styles.Login}>
            <form onSubmit={onSubmitHandler}>
                <h2>[LOGO]</h2>
                <div className={styles.loginInputGroup}>
                    <label htmlFor="username">Username</label>
                    <input onChange={usernameOnChangeHandler} id="username" name="username"></input>
                </div>
                <div className={styles.loginInputGroup}>
                    <label htmlFor="password">Password</label>
                    <input onChange={passwordOnChangeHandler} id="password" name="password"></input>
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;