import React from 'react';
import styles from './EmployeeMatches.module.scss';

const EmployeeMatches = () => {
    const mockData = [
        {
            company: 'Amazing Tech',
            position: 'Junior Full-Stack Developer',
            preferableSkills: [
                'HTML', 'CSS', 'Sass', 'Javascript', 'React.JS', 'MS-DOS', 'Node.JS', 'SQL'
            ]
        },
        {
            company: 'Amazing Tech',
            position: 'Junior Full-Stack Developer',
            preferableSkills: [
                'HTML', 'CSS', 'Sass', 'Javascript', 'React.JS', 'MS-DOS', 'Node.JS', 'SQL'
            ]
        },
        {
            company: 'Amazing Tech',
            position: 'Junior Full-Stack Developer',
            preferableSkills: [
                'HTML', 'CSS', 'Sass', 'Javascript', 'React.JS', 'MS-DOS', 'Node.JS', 'SQL'
            ]
        },
        {
            company: 'Amazing Tech',
            position: 'Junior Full-Stack Developer',
            preferableSkills: [
                'HTML', 'CSS', 'Sass', 'Javascript', 'React.JS', 'MS-DOS', 'Node.JS', 'SQL'
            ]
        }
    ]
    return (
        <div className={styles.EmployeeMatches}>
            <h3>Matches</h3>

            {mockData.map(item => (
                <div className={styles.matchesCard}>
                    <h4>{item.position} - <span>{item.company}</span></h4>
                    <div className={styles.psWrapper}>
                        <p className="ps-left">Preferable skills: </p>
                        {/* map over every item except the last, this hack is for removing the last comma sign */}
                        <p className="ps-right">{item.preferableSkills.map(skill => (`${skill}, `)).slice(0, -1)} {item.preferableSkills[item.preferableSkills.length - 1]}</p>
                        <div className={styles.arrowWrapper}><i class="arrow fas fa-arrow-right"></i></div>
                    </div>
                    
                </div>
            ))}

        </div>
    )
}

export default EmployeeMatches;