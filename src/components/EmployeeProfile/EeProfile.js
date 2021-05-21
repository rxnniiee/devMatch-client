import React, { useEffect, useState } from "react";
import { useHistory, Redirect, Link } from "react-router-dom";
import styles from "./EeProfile.module.scss";
import { useSelector } from "react-redux";
import Button from "../UI/Button";
import * as api from '../../api/index.js';
import useUser from '../Main/hooks/useUser.js';

const Profile = ({ setUser, setToken }) => {
  const employeeProfile = useSelector((state) => state.talent.profile);
  const history = useHistory();
  const { user } = useUser();
  const [profileInfo, setProfileInfo] = useState();

  const signOutHandler = () => {
    setUser('');
    setToken('');
  }

  const editProfileHandler = () => {
    history.push('/create-account/create-profile');
  }

  useEffect(() => {
    api.getTalent(user)
      .then(response => setProfileInfo(response.data))
  }, [])

  if (!profileInfo) return null;

  return (
    <div className={styles.profile}>
      <div className={styles.profileWrapper}>
        <img
          alt={`${employeeProfile.name} profile image`}
          src={employeeProfile.image}
        ></img>
        {profileInfo.firstname && <div className={styles.back}>
          <h1>{profileInfo.firstname} {profileInfo.lastname}</h1>
          <h2 className={styles.skills}>
            Skills: {profileInfo.skills.map((skill) => skill.value + " ")}
          </h2>
          <h2>Introduction</h2>
          <h3 className={styles.introduction}>{profileInfo.bio}</h3>
        </div>}
        {!profileInfo.firstname && <h1>No info yet</h1>}
        <div className={styles.btnGroup}>
          <Button onClick={signOutHandler}>Sign out</Button>
          <Button onClick={editProfileHandler}>Edit Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
