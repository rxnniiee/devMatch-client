import React, { useState } from "react";
import styles from "./CreateAccountUser.module.scss";
import { useHistory } from "react-router-dom";
import BackArrow from "../../../UI/BackArrow";
import Button from "../../../UI/Button";
import * as api from '../../../../api/index.js';

export default function CreateAccountUser() {
  const [talent, setTalent] = useState({});
  const history = useHistory();

  const onChangeHandler = (e) => {
    setTalent({...talent, [e.target.name]: e.target.value})
  }

  const onSubmitHandler = () => {
    if(talent.password !== talent.confirmPassword){
      console.log('passwords did not match')
      return
    }

    api.signupTalent({username: talent.email, password: talent.password})
    .then(response => {
      history.push('/login')
    })
    .catch(error => console.log(error))
  };

  return (
    <div className={styles.CreateAccountUser}>
      <BackArrow />
      <form>
        <h3>Create Account</h3>

        <div className={styles.loginInputGroup}>
          <label htmlFor="email">Email*</label>
          <input
            required
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            onChange={onChangeHandler}
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
            onChange={onChangeHandler}
          ></input>
        </div>

        <div className={styles.loginInputGroup}>
          <label htmlFor="confirmPassword">Confirm Password*</label>
          <input
            required
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={onChangeHandler}
          ></input>
        </div>

        <Button onClick={onSubmitHandler} type="submit" className={styles.button}>CREATE ACCOUNT</Button>
      </form>
    </div>
  );
}
