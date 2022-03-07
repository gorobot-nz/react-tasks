import { createStore, combineReducers } from "redux"
import { booksReducer } from "./books/booksReducer"

const rootReducer = combineReducers({
    books: booksReducer
})

export const store = createStore(rootReducer)