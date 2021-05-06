import React from 'react'
import styles from './JobOffer.module.scss'
import { useSelector, useDispatch } from 'react-redux'

export default function SingleJobOffer({ isPrevious }) {
  const jobOpenings = useSelector((state) => state.employee.queue)
  const count = useSelector((state) => state.count)

  //don't render previous component first time
  if (isPrevious && count === 0) {
    return null
  }

  if (isPrevious) {
  }

  //out of jobs? tough luck..
  if (count >= jobOpenings.length) {
    return <div className={styles.noMoreOffers}><h3 className={styles.noMoreText}>No more openings</h3></div>
  }

  return (
    //key={Math.random()} makes the entire component mount again, it's needed to make the css styling (fade and rotate) trigger again
    <div
      key={Math.random()}
      className={`${!isPrevious && styles.fadeIn} ${
        isPrevious && styles.previous
      } ${styles.jobOfferCard}`}
    >
      <img
        alt={`${jobOpenings[count].name} Offer image`}
        src={jobOpenings[count].image}
      ></img>

      <div className={styles.jobInfo}>
        <div className={styles.info}>
          <h3>{jobOpenings[count].name}</h3>
          <p><i class="fas fa-user"></i> {jobOpenings[count].specialty}</p>

          <p><i class="fas fa-briefcase"></i> {jobOpenings[count].jobType}</p>
          <p className={styles.skills}>
          <i className="fas fa-star"></i> {jobOpenings[count].skills.map((skill) => skill + ' ')}
          </p>
          <p className={styles.city}>
            <i className="fas fa-map-marker-alt"></i> {jobOpenings[count].city}
          </p>
          <p className={styles.jobDescription}>
            {jobOpenings[count].jobDescription}
          </p>
        </div>
      </div>
    </div>
  )
}
