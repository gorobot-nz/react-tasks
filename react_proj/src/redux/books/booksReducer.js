const defaultState = {
    books: [],
    booksCart: []
}

const SET_BOOKS = 'SET_BOOKS'
const SET_CART = 'SET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const booksReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CART:
            return { ...state, booksCart: action.payload }
        case SET_BOOKS:
            return { ...state, books: action.payload }
        case ADD_TO_CART:
            return { ...state, booksCart: [...state.booksCart, action.payload] }
        case REMOVE_FROM_CART:
            return { ...state, booksCart: state.booksCart.filter(book => book.book.id !== action.payload) }
        default:
            return state
    }
}

export const setBooksAction = (payload) => ({ type: SET_BOOKS, payload })
export const setCartAction = (payload) => ({ type: SET_CART, payload })
export const addToCartAction = (payload) => ({ type: ADD_TO_CART, payload })
export const removeFromCartAction = (payload) => ({ type: REMOVE_FROM_CART, payload })