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