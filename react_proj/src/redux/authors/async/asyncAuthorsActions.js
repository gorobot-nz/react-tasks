import { setAuthorsAction } from '../authorsReducer'
import axios from 'axios'

export const fetchAuhtors = () => {
    return async function (dispatch) {
        const { data } = await axios.get('http://localhost:8080/api/author', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        dispatch(setAuthorsAction(data.authors))
    }
}

export const addAuthor = (author) => {
    return async function (dispatch) {
        const { data } = await axios.post(`http://localhost:8080/api/author`,
            {
                name: author.name,
                surname: author.surname,

            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
        dispatch(fetchAuhtors())
    }
}