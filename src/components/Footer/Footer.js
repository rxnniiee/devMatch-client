import React from 'react'
import styles from './Footer.module.scss';
import { useSelector, useDispatch } from 'react-redux'
import { addToCount } from '../../store/actions.js'

const Footer = () => {
  const jobOpenings = useSelector((state) => state.employee.queue)
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  //don't show the footer if there are no more openings
  if(count === jobOpenings.length) {
      return null;
  }

    return (
        <div className={styles.Footer}>
            <div className={styles.thumbs}>
                <div onClick={() => {dispatch(addToCount())
                    console.log(`thumbed up ${jobOpenings[count].name}`)}} className={styles.thumb}>
                    <i className="fas fa-thumbs-up"></i>
                </div>
            <div
            onClick={() => {
              dispatch(addToCount())
              console.log(`thumbed down ${jobOpenings[count].name}`)
            }}
            className={styles.thumb}
          >
            <i class="fas fa-thumbs-down"></i>
          </div>
        </div>
        </div>
    )
}

export default Footer;