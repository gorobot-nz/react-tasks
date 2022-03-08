const defaultState = {
    books: [
        {
            id: 1,
            title: 'First',
            authors: [1, 2, 3],
            price: 129,
            img: "https://wallpapershome.ru/images/pages/pic_v/16158.jpg"
        },
        {
            id: 2,
            title: 'Second',
            authors: [1, 2, 3],
            price: 129,
            img: "https://wallpapershome.ru/images/pages/pic_v/16158.jpg"
        },
        {
            id: 3,
            title: 'Third',
            authors: [1, 2, 3],
            price: 129,
            img: "https://wallpapershome.ru/images/pages/pic_v/16158.jpg"
        },
        {
            id: 4,
            title: 'Fourth',
            authors: [1, 2, 3],
            price: 129,
            img: "https://wallpapershome.ru/images/pages/pic_v/16158.jpg"
        },
        {
            id: 5,
            title: 'Fifth',
            authors: [1, 2, 3],
            price: 129,
            img: "https://wallpapershome.ru/images/pages/pic_v/16158.jpg"
        },
        {
            id: 6,
            title: 'Sixth',
            authors: [1, 2, 3],
            price: 129,
            img: "https://wallpapershome.ru/images/pages/pic_v/16158.jpg"
        },
        {
            id: 7,
            title: 'Seventh',
            authors: [1, 2, 3],
            price: 129,
            img: "https://wallpapershome.ru/images/pages/pic_v/16158.jpg"
        },
    ],
    booksCart: []
}

const SET_BOOKS = 'SET_BOOKS'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const booksReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return { ...state, books: action.payload }
        case ADD_TO_CART:
            return { ...state, booksCart: [...state.booksCart, action.payload] }
        case REMOVE_FROM_CART:
            return { ...state, booksCart: state.booksCart.filter(book => book.id !== action.payload) }
        default:
            return state
    }
}

export const setBooksAction = (payload) => ({ type: SET_BOOKS, payload })
export const addToCartAction = (payload) => ({ type: ADD_TO_CART, payload })
export const removeFromCartAction = (payload) => ({ type: REMOVE_FROM_CART, payload })