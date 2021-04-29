import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./JobOffer.module.scss"
import { useSelector } from 'react-redux';
import SingleJoboffer from './SingleJobOffer';

const Offers =() => {
    const [count, setCount] = useState(0);

    return (
        <div className={`${styles.queue}`}>
            <SingleJoboffer isPrevious={false} />
            <SingleJoboffer isPrevious={true} />
        </div>
    )
}

export default Offers;