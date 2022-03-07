const defaultState = {
    books: ['test', 'test1'],
    booksBasket: []
}

const SET_BOOKS = 'SET_BOOKS'
const ADD_TO_BASKET = 'ADD_TO_BASKET'
const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET'

export const booksReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return { ...state, books: action.payload }
        case ADD_TO_BASKET:
            return { ...state, booksBasket: [...state.booksBasket, action.payload] }
        case REMOVE_FROM_BASKET:
            return { ...state, booksBasket: state.booksBasket.filter(book => book.id !== action.payload) }
        default:
            return state
    }
}

export const setBooksAction = (payload) => ({ type: SET_BOOKS, payload })
export const addToBasketAction = (payload) => ({ type: ADD_TO_BASKET, payload })
export const removeFromBasketAction = (payload) => ({ type: REMOVE_FROM_BASKET, payload })