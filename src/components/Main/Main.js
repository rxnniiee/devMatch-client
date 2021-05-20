import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//components
import LandingPage from "./LandingPage/LandingPage";
import Login from "./Login/Login";
import CreateAccount from "./CreateAccount/CreateAccount";
import CreateAccountCompany from "./CreateAccount/CreateAccountCompany/CreateAccountCompany";
import CreateAccountUser from "./CreateAccount/CreateAccountUser/CreateAccountUser";
import EmployeeMatches from "./EmployeePages/EmployeeMatches/EmployeeMatches";
import Profile from "../EmployeeProfile/EeProfile";
import Offer from "../JobOffer/JobOffers";
import CreateProfile from "./CreateProfile/CreateProfile";
import Header from "../Header/Header";
import Card from "../UI/Card";
import useToken from './hooks/useToken.js';
import useUser from './hooks/useUser.js';

const Main = () => {
  const { token, setToken } = useToken();
  const { user, setUser } = useUser();

  if (!token) {
    console.log(token)

    return <Switch>

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

      <Route path="/create-account/create-profile">
        <CreateProfile user={user} />
      </Route>

      <Route path="/login">
        <Login setToken={setToken} setUser={setUser} />
      </Route>

      <Redirect to='/' />

    </Switch>
  }



  return (
    <>
    <Header />
      <Switch>

      <Route path="/create-account/create-profile">
        <CreateProfile user={user} />
      </Route>

        <Route path="/employee/matches">
          <EmployeeMatches />
        </Route>

        <Route path="/profile">
          <Profile setToken={setToken} setUser={setUser} />
        </Route>

        <Route path="/jobopenings">
          <Offer />
        </Route>

      </Switch>

    </>
  );
};

export default Main;
