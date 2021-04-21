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
        id: 2
    },
    queue: [
        {
            OpenPositionId: 10
        },
        {
            OpenPositionId: 11
        },
        {
            OpenPositionId: 12
        },

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
