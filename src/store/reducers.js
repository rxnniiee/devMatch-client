import * as actionTypes from '../store/actions';

//handles keeping track of which user is logged in, and the user's matches
const employeeReducer = (state = intialStateEmployee, action) => {
    switch (action.type) {
        case actionTypes.CREATE_EMPLOYEE:
            return { ...state, employee: state.employee.concat({ value: action.payload }) }
        case actionTypes.ADD_MATCH:
            return { ...state, matches: state.employee.matches.concat({ value: action.payload }) }
        default:
            return state;
    }
}

// keeps track of which company is logged in
const employerReducer = (state = initialStateEmployer, action) => {
    switch (action.type) {
        case actionTypes.CREATE_EMPLOYER:
            return { ...state, employer: state.employer.concat({ value: action.payload }) }
        default:
            return state;
    }
}

export { employeeReducer, employerReducer };

//initial states
const intialStateEmployee = {
    profile: {
        id: 1,
        name: 'Test employee',
        image: 'https://images.unsplash.com/photo-1567890279179-837d5692f45e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
        specialty: 'Full Stack Developer',
        skills: ['HTML', 'CSS', 'Javascript', 'React.JS', 'Node.JS', 'SQL'],
        jobType: 'Full-Time',
        city: 'Helsinki',
        introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque repudiandae, officia minima animi praesentium eius adipisci magni itaque voluptate rem ipsa ad dolorum, mollitia debitis nulla aut laboriosam amet unde! Quia culpa fugit ratione illo quidem, esse eveniet voluptas repellendus obcaecati, beatae ipsam in rerum blanditiis? Alias temporibus debitis dolor neque facilis dicta doloribus amet nostrum suscipit quibusdam excepturi, impedit natus soluta tempore iusto fugiat a ipsa eius perferendis! Fugit recusandae animi voluptate sed, temporibus, illum a fugiat corrupti aliquid iste nobis, id fuga ea voluptatum aspernatur obcaecati. Vero, sapiente deleniti! Accusamus deserunt repellendus necessitatibus distinctio nostrum quos repellat consequatur.',
    },
    queue: [
        {
            OpenPositionId: 10,
            image: 'https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
            name: 'Test Company',
            speciality: 'Full-Stack Developer',
            skills: ['HTML', 'CSS', 'Javascript', 'React.JS', 'Node.JS', 'SQL'],
            jobType: 'Full-Time',
            city: 'Helsinki',
            jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque repudiandae, officia minima animi praesentium eius adipisci magni itaque voluptate rem ipsa ad dolorum, mollitia debitis nulla aut laboriosam amet unde! Quia culpa fugit ratione illo quidem, esse eveniet voluptas repellendus obcaecati, beatae ipsam in rerum blanditiis? Alias temporibus debitis dolor neque facilis dicta doloribus amet nostrum suscipit quibusdam excepturi, impedit natus soluta tempore iusto fugiat a ipsa eius perferendis! Fugit recusandae animi voluptate sed, temporibus, illum a fugiat corrupti aliquid iste nobis, id fuga ea voluptatum aspernatur obcaecati. Vero, sapiente deleniti! Accusamus deserunt repellendus necessitatibus distinctio nostrum quos repellat consequatur.'
        }

    ],
    matches: [
        {
            id: 20,
            company: 'Amazing Tech',
            position: 'Junior Full-Stack Developer',
            preferableSkills: [
                'HTML', 'CSS', 'Sass', 'Javascript', 'React.JS', 'MS-DOS', 'Node.JS', 'SQL'
            ]
        },
        {
            id: 21,
            company: 'Amazing Tech',
            position: 'Junior Full-Stack Developer',
            preferableSkills: [
                'HTML', 'CSS', 'Sass', 'Javascript', 'React.JS', 'MS-DOS', 'Node.JS', 'SQL'
            ]
        },
        {
            id: 22,
            company: 'Amazing Tech',
            position: 'Junior Full-Stack Developer',
            preferableSkills: [
                'HTML', 'CSS', 'Sass', 'Javascript', 'React.JS', 'MS-DOS', 'Node.JS', 'SQL'
            ]
        },
        {
            id: 23,
            company: 'Amazing Tech',
            position: 'Junior Full-Stack Developer',
            preferableSkills: [
                'HTML', 'CSS', 'Sass', 'Javascript', 'React.JS', 'MS-DOS', 'Node.JS', 'SQL'
            ]
        }
    ]
}

const initialStateEmployer = {
    profile: {
        id: 30
    },
    openPositions: [
        {
            positionId: 40,
            queue: [
                {
                    employeeId: 41
                }
            ],
            matches: [
                {
                    userId: 1,
                    chat: [
                        {
                            senderId: 20,
                            message: 'This is a test chat message',
                            date: new Date()
                        }
                    ]
                }
            ]
        }
    ]
}
