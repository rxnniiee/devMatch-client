import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';

const Login = () => {
    
    const [user, setUser] = useState();

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]: value})
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(user);
    }

    return (
        <div className={styles.Login}>
            <form>
            <div className={styles.backArrow}><Link to="/">back</Link></div>
                <h3>Sign In</h3>
                <div className={styles.loginInputGroup}>
                    <label htmlFor="username">Username</label>
                    <input  onChange={onChangeHandler} required type="text" id="username" name="username"></input>
                </div>
                <div className={styles.loginInputGroup}>
                    <label htmlFor="password">Password</label>
                    <input onChange={onChangeHandler} required type="password" id="password" name="password"></input>
                </div>
            </form>
            <Link to="/jobopening"><button onClick={onSubmitHandler}>Sign In</button></Link>
        </div>
    )
}

export default Login;