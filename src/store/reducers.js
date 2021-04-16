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
const employerReducer = (state = null, action) => {
    switch (action.type) {
        case actionTypes.CREATE_EMPLOYER:
            return { ...state, employer: state.employer.concat({ value: action.payload }) }
        default:
            return state;
    }
}

//keeps track of the chat. Should it be inside both employeeReducer and employerReducer, though?
const chatReducer = (state = initialStateChat, action) => {
    switch (action.type) {
        case actionTypes.ADD_CHAT:
            return { ...state, chat: state.chat.concat({ value: action.payload }) }
        default:
            return state;
    }
}

export { employeeReducer, employerReducer, chatReducer };

//initial states
const intialStateEmployee = {
    firstname: 'Balthazar',
    lastname: 'Kubernetius',
    skills: ['HTML/CSS', 'Javascript', 'React'],
    bio: 'I am devloperz',
    matches: [
        {
            id: 1,
            company: 'Amazing Tech',
            position: 'Junior Full-Stack Developer',
            preferableSkills: [
                'HTML', 'CSS', 'Sass', 'Javascript', 'React.JS', 'MS-DOS', 'Node.JS', 'SQL'
            ]
        },
        {
            id: 2,
            company: 'Amazing Tech',
            position: 'Junior Full-Stack Developer',
            preferableSkills: [
                'HTML', 'CSS', 'Sass', 'Javascript', 'React.JS', 'MS-DOS', 'Node.JS', 'SQL'
            ]
        },
        {
            id: 3,
            company: 'Amazing Tech',
            position: 'Junior Full-Stack Developer',
            preferableSkills: [
                'HTML', 'CSS', 'Sass', 'Javascript', 'React.JS', 'MS-DOS', 'Node.JS', 'SQL'
            ]
        },
        {
            id: 4,
            company: 'Amazing Tech',
            position: 'Junior Full-Stack Developer',
            preferableSkills: [
                'HTML', 'CSS', 'Sass', 'Javascript', 'React.JS', 'MS-DOS', 'Node.JS', 'SQL'
            ]
        }
    ]
}

const initialStateChat = [
    { senderId: 1, message: 'test' },
    { senderId: 2, message: 'test' },
    { senderId: 1, message: 'test' },
    { senderId: 1, message: 'test' }
]