import React from "react";
import { Link } from 'react-router-dom';
import styles from "./EeProfile.module.scss"
import { useSelector } from 'react-redux';

const Profile =() => {
    const employeeProfile = useSelector(state => state.employee.profile)

    return (
        <div className={styles.profile}>
            <img alt={`${employeeProfile.name} profile image`} src={employeeProfile.image}></img>
            <div>
                <h1>{employeeProfile.name}</h1>
                <h2>{employeeProfile.speciality}</h2>
                <h2>{employeeProfile.jobType}</h2>
                <h3>{employeeProfile.city}</h3>
                <h2>Introduction</h2>
                <h3 className={styles.introduction}>{employeeProfile.introduction}</h3>
            </div>
        </div>
    )
}

export default Profile;