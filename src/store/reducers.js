import * as actionTypes from '../store/actions';

const employeeReducer = (state = intialStateEmployee, action) => {
    switch (action.type){
        case actionTypes.CREATE_EMPLOYEE :
            return {...state, employees: state.employees.concat({value: action.payload})}
            default:
      return state;
    }
}

const employerReducer = (state = null, action) => {
    switch (action.type){
        case actionTypes.CREATE_EMPLOYER :
            return {...state, employers: state.employers.concat({value: action.payload})}
            default:
      return state;
    }
}

const intialStateEmployee = [{
    firstname: 'Balthazar',
    lastname: 'Kubernetius',
    skills: ['HTML/CSS', 'Javascript', 'React'],
    bio: 'I am devloperz',
},
{
    firstname: 'Miia',
    lastname: 'Dockerniemi',
    skills: ['HTML/CSS', 'Javascript', 'React'],
    bio: 'Eat, sleep, code, reapeat',
},
{
    firstname: 'Markku',
    lastname: 'Javacriptius',
    skills: ['HTML/CSS', 'Javascript', 'React'],
    bio: 'Aligning divs is my hobby',
},
{
    firstname: 'Sara',
    lastname: 'Lesström',
    skills: ['HTML/CSS', 'Javascript', 'React'],
    bio: 'Coffee, pls?',
}]

export { employeeReducer, employerReducer };