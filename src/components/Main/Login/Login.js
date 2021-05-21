//react
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

//styles
import styles from './Login.module.scss';

//components
import Button from '../../UI/Button';

//backend api
import * as api from '../../../api/index.js';

require('dotenv').config()

const Login = ({setToken, setUser}) => {
  const history = useHistory()

  const [login, setLogin] = useState({ username: '', password: '' })

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setLogin({ ...login, [name]: value })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()

    //make call to backend with username and password
    api.login(login)
    .then(response => {
      setToken(response.data.token)
      setUser(response.data.talent._id)
      history.push('/jobopenings')
    })
    .catch(error => console.log(error))
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

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
  setuser: PropTypes.func.isRequired
};
