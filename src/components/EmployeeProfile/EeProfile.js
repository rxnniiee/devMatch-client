import React from "react";
import { useHistory, Redirect, Link } from "react-router-dom";
import styles from "./EeProfile.module.scss";
import { useSelector } from "react-redux";
import Button from "../UI/Button";

const Profile = ({setUser, setToken}) => {
  const employeeProfile = useSelector((state) => state.talent.profile);
  const history = useHistory();

  const signOutHandler = () => {
    setUser('');
    setToken('');
  }

  const editProfileHandler = () => {
    history.push('/create-account/create-profile');
  }

  return (
    <div className={styles.profile}>
      <img
        alt={`${employeeProfile.name} profile image`}
        src={employeeProfile.image}
      ></img>
      <div className={styles.back}>
        <h1>{employeeProfile.name}</h1>
        <h2>Specialty: {employeeProfile.specialty}</h2>
        <h2>Looking for {employeeProfile.jobType} job</h2>
        <h2 className={styles.skills}>
          Skills: {employeeProfile.skills.map((skill) => skill + " ")}
        </h2>
        <h2 className={styles.city}>
          From: <i className="fas fa-map-marker-alt"></i> {employeeProfile.city}
        </h2>
        <h2>Introduction</h2>
        <h3 className={styles.introduction}>{employeeProfile.introduction}</h3>
      </div>
      <div className={styles.btnGroup}>
      <Button onClick={signOutHandler}>Sign out</Button>
      <Button onClick={editProfileHandler}>Edit Profile</Button>
      </div>
    </div>
  );
};

export default Profile;
