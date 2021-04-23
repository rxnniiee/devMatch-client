import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.Header}>
           <ul>
               <li><Link to="/profile">Profile</Link></li>
               <li><Link to="/jobopening">Search</Link></li>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/employee/matches">Matches</Link></li>
           </ul>
        </div>
    )
}

export default Header;
