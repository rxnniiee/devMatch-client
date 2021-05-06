import React from "react";
import styles from "./JobOffer.module.scss"
import SingleJoboffer from './SingleJobOffer';
import Footer from '../Footer/Footer.js';

const Offers =() => {

    return (
        <div className={styles.queue}>
            <SingleJoboffer isPrevious={false} />
            <Footer />
        </div>
    )
}

export default Offers;