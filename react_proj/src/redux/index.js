import { createStore, combineReducers, applyMiddleware } from "redux"
import { booksReducer } from "./books/booksReducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    books: booksReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))