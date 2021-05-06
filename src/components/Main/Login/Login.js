<<<<<<< HEAD
//react
import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

//sttyles
import styles from './Login.module.scss';
=======
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import Button from "../../UI/Button";
>>>>>>> develop

//backend api
import * as api from '../../../api/index.js';

const Login = () => {
<<<<<<< HEAD
    const history = useHistory();
    
    const [user, setUser] = useState({username: '', password: ''});
=======
  const [user, setUser] = useState();
>>>>>>> develop

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

<<<<<<< HEAD
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(user);

        //make call to backend woth username and password
        api.login(user);

        //redirect to jobopenings
        history.push('/jobopening')
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

            <button onClick={onSubmitHandler}>Sign In</button>

            </form>
=======
  const onSubmitHandler = (e) => {
    console.log(user);
  };

  return (
    <div className={styles.Login}>
      <form>
        <div className={styles.backArrow}>
          <Link to="/">back</Link>
>>>>>>> develop
        </div>
        <h3>Sign In</h3>
        <div className={styles.loginInputGroup}>
          <label htmlFor="username">Username</label>
          <input
            onChange={onChangeHandler}
            required
            type="text"
            placeholder="Username"
            id="username"
            name="username"
          ></input>
        </div>
        <div className={styles.loginInputGroup}>
          <label htmlFor="password">Password</label>
          <input
            onChange={onChangeHandler}
            required
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          ></input>
        </div>
      </form>
      <Link to="/jobopening">
        <Button onClick={onSubmitHandler}>Sign In</Button>
      </Link>
    </div>
  );
};

export default Login;
