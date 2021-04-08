import * as actionTypes from '../store/actions';

const employeeReducer = (state = intialStateEmployee, action) => {
    switch (action.type){
        case actionTypes.CREATE_EMPLOYEE :
            return {...state, employees: state.employees.concat({id: new Date(), value: action.payload})}
            default:
      return state;
    }
}

const employerReducer = (state = null, action) => {
    switch (action.type){
        case actionTypes.CREATE_EMPLOYER :
            return {...state, employers: state.employers.concat({id: new Date(), value: action.payload})}
            default:
      return state;
    }
}

const intialStateEmployee = [{
    username: 'Matti',
    skills: ['HTML/CSS', 'Javascript', 'React'],
    bio: 'I am devloperz',
}]

export { employeeReducer, employerReducer };