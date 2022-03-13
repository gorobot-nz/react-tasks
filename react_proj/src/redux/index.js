import { createStore, combineReducers, applyMiddleware } from "redux"
import { booksReducer } from "./books/booksReducer"
import thunk from "redux-thunk"
import { userReducer } from "./user/userReducer"
import { authorsReducer } from "./authors/authorsReducer"

const rootReducer = combineReducers({
    books: booksReducer,
    user: userReducer,
    authors: authorsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))