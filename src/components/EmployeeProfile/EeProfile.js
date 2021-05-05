import React from "react";
import { Link } from "react-router-dom";
import styles from "./EeProfile.module.scss";
import { useSelector } from "react-redux";
import Button from "../UI/Button";

const Profile = () => {
  const employeeProfile = useSelector((state) => state.employee.profile);

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
          From: <i class="fas fa-map-marker-alt"></i> {employeeProfile.city}
        </h2>
        <h2>Introduction</h2>
        <h3 className={styles.introduction}>{employeeProfile.introduction}</h3>
      </div>
      <Button>Ok</Button>
    </div>
  );
};

export default Profile;
