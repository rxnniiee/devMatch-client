import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './JobOffer.module.scss'
import { addToCount } from '../../store/actions.js';

export default function SingleJobOffer({isPrevious}) {
    const jobOpenings = useSelector(state => state.employee.queue)
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    
    //don't render previous component first time
    if(isPrevious && count === 0) {
        return null
    }

    //out of jobs? tough luck..
    if(count >= jobOpenings.length){
        return <h1>{isPrevious && 'No more openings'}</h1>
    }

    return (
        //key={Math.random()} makes the entire component mount again, it's needed to make the css styling (fade and rotate) trigger again
        <div key={Math.random()} className={`${!isPrevious && styles.fadeIn} ${isPrevious && styles.previous} ${styles.jobOfferCard}`}>

            <img alt={`${jobOpenings[count].name} Offer image`} src={jobOpenings[count].image}></img>

            <div>
                <h1>{jobOpenings[count].name}</h1>
                <h2>{jobOpenings[count].specialty}</h2>

                <div className={styles.thumbs}>
                    <div onClick={() => {dispatch(addToCount()); console.log(`thumbed up ${jobOpenings[count].name}`)} } className={styles.thumbsUp}><i className="fas fa-thumbs-up"></i></div>
                    <div onClick={() => {dispatch(addToCount()); console.log(`thumbed down ${jobOpenings[count].name}`)} } className={styles.thumbsDown}><i class="fas fa-thumbs-down"></i></div>
                </div>

                <h2>Vacancy type: {jobOpenings[count].jobType}</h2>
                <h2 className={styles.skills}>Skills: {jobOpenings[count].skills.map(skill => skill + ' ')}</h2>
                <h2 className={styles.city}><i class="fas fa-map-marker-alt"></i> {jobOpenings[count].city}</h2>
                <h2>Job description</h2>
                <h3 className={styles.jobDescription}>{jobOpenings[count].jobDescription}</h3>
                
            </div>
        </div>
    )
}



