export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const CREATE_EMPLOYER = 'CREATE_EMPLOYER';

export const addEmployee = (newEmployee) => {
    return (dispatch) => {
        dispatch({
            type: CREATE_EMPLOYEE,
            payload: newEmployee
        })
    }
} 

export const addEmployer = (newEmployer) => {
    return (dispatch) => {
        dispatch({
            type: CREATE_EMPLOYER,
            payload: newEmployer
        })
    }
} 
