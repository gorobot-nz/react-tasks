const defaultState = {
    user: {},
    isAuth: false,
    isError: false
}

const SET_USER = 'SET_USER'
const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_IS_ERROR = 'SET_IS_ERROR'

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload }
        case SET_IS_AUTH:
            return { ...state, isAuth: action.payload }
        case SET_IS_ERROR:
            return { ...state, isError: action.payload }
        default:
            return state
    }
}

export const setUserAction = (payload) => ({ type: SET_USER, payload })
export const setIsAuthAction = (payload) => ({ type: SET_IS_AUTH, payload })
export const setIsError = (payload) => ({ type: SET_IS_ERROR, payload })