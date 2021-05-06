import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import Button from "../../UI/Button";

const Login = () => {
  const [user, setUser] = useState();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitHandler = (e) => {
    console.log(user);
  };

  return (
    <div className={styles.Login}>
      <form>
        <div className={styles.backArrow}>
          <Link to="/">back</Link>
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
