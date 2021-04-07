import React  from 'react';
import { Route, Switch, } from 'react-router-dom';
import Login from './Login/Login';
import styles from './Main.module.scss';


const Main = () => {
    return (
        <div className={styles.Main}>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </div>
    )
}

export default Main;