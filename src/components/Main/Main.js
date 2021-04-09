import React  from 'react';
import { Route, Switch, } from 'react-router-dom';

//components
import LandingPage from './LandingPage/LandingPage';
import Login from './Login/Login';
import Signup from './Signup/Signup';

//styles
import styles from './Main.module.scss';

const Main = () => {
    return (
        <div className={styles.Main}>
            <Switch>
                <Route path="/" exact>
                    <LandingPage />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signup" exact>
                    <Signup />
                </Route>
            </Switch>
        </div>
    )
}

export default Main;