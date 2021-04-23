import React from "react";
import { Link } from 'react-router-dom';
import styles from "./JobOffer.module.scss"
import { useSelector } from 'react-redux';

const Offer =() => {
    const jobOpenings = useSelector(state => state.employee.queue)

    return (
        <div className={styles.queue}>
            <img alt={`${jobOpenings[0].name} Offer image`} src={jobOpenings[0].image}></img>
            <div>
                <h1>{jobOpenings[0].name}</h1>
                <h2>{jobOpenings[0].specialty}</h2>
                <h2>Vacancy type: {jobOpenings[0].jobType}</h2>
                <h2 className={styles.skills}>Skills: {jobOpenings[0].skills.map(skill => skill + ' ')}</h2>
                <h2 className={styles.city}><i class="fas fa-map-marker-alt"></i> {jobOpenings[0].city}</h2>
                <h2>Job description</h2>
                <h3 className={styles.jobDescription}>{jobOpenings[0].jobDescription}</h3>
                <div className={styles.thumbs}>
                    <div className={styles.thumbsUp}><i className="fas fa-thumbs-up"></i></div>
                    <div className={styles.thumbsDown}><i class="fas fa-thumbs-down"></i></div>
                </div>
            </div>
        </div>
    )
}

export default Offer;