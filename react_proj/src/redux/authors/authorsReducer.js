const defaultState = {
    authors: [],
}

const SET_AUTHORS = 'SET_AUTHORS'

export const authorsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_AUTHORS:
            return { ...state, authors: action.payload }
        default:
            return state
    }
}

export const setAuthorsAction = (payload) => ({ type: SET_AUTHORS, payload })