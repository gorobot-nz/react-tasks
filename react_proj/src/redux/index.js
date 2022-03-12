import { createStore, combineReducers, applyMiddleware } from "redux"
import { booksReducer } from "./books/booksReducer"
import thunk from "redux-thunk"
import { userReducer } from "./user/userReducer"

const rootReducer = combineReducers({
    books: booksReducer,
    user: userReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))