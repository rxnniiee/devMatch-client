import * as api from '../api/index.js';

export const FETCH_TALENT_PROFILE = 'FETCH_TALENT_PROFILE';
export const FETCH_TALENT_MATCHES = 'FETCH_TALENT_MATCHES';
export const FETCH_TALENT_QUEUE = 'FETCH_TALENT_QUEUE';

export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const CREATE_EMPLOYER = 'CREATE_EMPLOYER';
export const ADD_CHAT = 'ADD_CHAT';
export const ADD_MATCH = 'ADD_MATCH';
export const ADD_TO_COUNT = 'ADD_TO_COUNT';

export const fetchTalentProfile = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTalentProfile();

        dispatch({ type: FETCH_TALENT_PROFILE, payload: data })
    }
    catch (error) {
        console.log(error.message);
    }
}

export const fetchTalentMatches = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTalentMatches();

        dispatch({ type: FETCH_TALENT_MATCHES, payload: data })
    }
    catch (error) {
        console.log(error.message);
    }
}

export const fetchTalentQueue = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTalentQueue();

        dispatch({ type: FETCH_TALENT_QUEUE, payload: data })
    }
    catch (error) {
        console.log(error.message);
    }
}

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

export const addToCount = () => {
    return (dispatch) => {
        dispatch({
            type: ADD_TO_COUNT
        })
    }
}