import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
      <ul>
        <li>
          <Link to="/profile">Profile <i className="fas fa-user"></i></Link>
        </li>
        <li>
          <Link to="/jobopenings">Search <i className="fas fa-search"></i></Link>
        </li>
        <li>
          <Link to="/employee/matches">Matches <i className="fas fa-thumbs-up"></i></Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
