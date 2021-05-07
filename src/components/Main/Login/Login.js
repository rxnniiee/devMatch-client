//react
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


//styles
import styles from './Login.module.scss';

//components
import Button from '../../UI/Button';

//backend api
import * as api from '../../../api/index.js';

const Login = () => {
  const history = useHistory()

  const [user, setUser] = useState({ username: '', password: '' })

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log(user)

    //make call to backend woth username and password
    api.login(user)

    //redirect to jobopenings
    history.push('/jobopening')
  }

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
        <Button onClick={onSubmitHandler}>Sign In</Button>
    </div>
  )
}

export default Login
