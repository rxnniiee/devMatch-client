import React from "react";
import styles from "./EeProfile.module.scss"

const Profile =({name,specialty,jobType,location,introduction, img}) => {
    return (
        <div className={styles.profile}>
            <img alt={name} src={img}></img>
            <div>
                <h1>{name}</h1>
                <h2>{specialty}</h2>
                <h3>{jobType}</h3>
                <h3>{location}</h3>
                <h3>Introduction</h3>
                <p>{introduction}</p>
            </div>
            <button></button>
        </div>
    )
}

export default Profile;