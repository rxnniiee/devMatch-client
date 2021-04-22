import React from 'react';
import styles from './EmployeeMatches.module.scss';
import { useHistory } from 'react-router-dom'; //hook for redirecting inside onClickHandler function
import { useSelector } from 'react-redux';

const EmployeeMatches = () => {
    const matches = useSelector(state => state.employee.matches)
    let history = useHistory();

    const onClickHandler = (id) => {
        //TODO: redirect to right page
        // history.push(`/`);
    }

    return (
        <div className={styles.EmployeeMatches}>
            <h3>Matches</h3>

            {matches.map(item => (
                //when user clicks on specific card, onClickHandler is fired
                <div onClick={() => onClickHandler(item.id)} className={styles.matchesCard}>
                    <h4>{item.position} - <span>{item.company}</span></h4>
                    <div className={styles.psWrapper}>
                        <p className="ps-left">Preferable skills: </p>
                        {/* the slice hack is for removing the last item, but the last item is then added after the mapping, but without a comma sign */}
                        <p className="ps-right">{item.preferableSkills.map(skill => (`${skill}, `)).slice(0, -1)} {item.preferableSkills[item.preferableSkills.length - 1]}</p>
                        <div className={styles.arrowWrapper}><i class="arrow fas fa-arrow-right"></i></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default EmployeeMatches;