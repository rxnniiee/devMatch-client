import React from "react";
import { Route, Switch } from "react-router-dom";

//components
import LandingPage from './LandingPage/LandingPage';
import Login from './Login/Login';
import CreateAccount from './CreateAccount/CreateAccount';
import CreateAccountCompany from './CreateAccount/CreateAccountCompany/CreateAccountCompany';
import CreateAccountUser from './CreateAccount/CreateAccountUser/CreateAccountUser'
import EmployeeMatches from './EmployeePages/EmployeeMatches/EmployeeMatches';
import EmployeeChat from './EmployeePages/EmployeeChat/EmployeeChat';
import CreateProfile from './CreateProfile/CreateProfile';
import Profile from '../EmployeeProfile/EeProfile'

//styles
import styles from "./Main.module.scss";

const mockdata = {
    name: "testname",
    specicalty: "Fullstack",
    jobType: "fulltime"
}

const Main = () => {
    return (
        <div className={styles.Main}>
            <Switch>
                <Route path="/" exact>
                    <LandingPage />
                </Route>
                <Route path="/create-account" exact>
                    <CreateAccount />
                </Route>
                <Route path="/create-account/company" exact>
                    <CreateAccountCompany />
                </Route>
                <Route path="/create-account/user" exact>
                    <CreateAccountUser />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/employee/matches">
                    <EmployeeMatches />
                </Route>
                <Route path="/profile">
                    <Profile {...mockdata}/>
                </Route>
                
            </Switch>
        </div>
    )
}

export default Main;
