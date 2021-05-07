//React
import React from 'react'
import styles from './Footer.module.scss'
import { useSelector, useDispatch } from 'react-redux'

//Components
import Button from '../UI/Button';

//actions
import { addToCount } from '../../store/actions.js'

const Footer = () => {
  const jobOpenings = useSelector((state) => state.talent.queue)
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  //don't show the footer if there are no more openings
  if (count === jobOpenings.length) {
    return null
  }

  return (
    <div className={styles.Footer}>
      <div className={styles.thumbs}>
        {/* <div
          onClick={() => {
            dispatch(addToCount())
            console.log(`thumbed up ${jobOpenings[count].name}`)
          }}
          className={styles.thumb}
        >
          <i className="fas fa-thumbs-up"></i>
        </div> */}
        <Button onClick={() => {
            dispatch(addToCount())
            console.log(`thumbed down ${jobOpenings[count].name}`)
          }}><i className="fas fa-thumbs-up"></i>

        </Button>

        <Button onClick={() => {
            dispatch(addToCount())
            console.log(`thumbed down ${jobOpenings[count].name}`)
          }}>
            <i className="fas fa-thumbs-down"></i>
          </Button>

        {/* <div
          onClick={() => {
            dispatch(addToCount())
            console.log(`thumbed down ${jobOpenings[count].name}`)
          }}
          className={styles.thumb}
        >
          <i className="fas fa-thumbs-down"></i>
        </div> */}
      </div>
    </div>
  )
}

export default Footer
