import React from "react";
import styles from "./JobOffer.module.scss"
import SingleJoboffer from './SingleJobOffer';

const Offers =() => {

    return (
        <div className={`${styles.queue}`}>
            <SingleJoboffer isPrevious={false} />
            <SingleJoboffer isPrevious={true} />
        </div>
    )
}

export default Offers;