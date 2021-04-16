export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const CREATE_EMPLOYER = 'CREATE_EMPLOYER';
export const ADD_CHAT = 'ADD_CHAT';
export const ADD_MATCH = 'ADD_MATCH';

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

export const addChat = (newChat) => {
    return (dispatch) => {
        dispatch({
            type: ADD_CHAT,
            payload: newChat
        })
    }
}

export const addMatch = (newMatch) => {
    return (dispatch) => {
        dispatch({
            type: ADD_MATCH,
            payload: newMatch
        })
    }
}