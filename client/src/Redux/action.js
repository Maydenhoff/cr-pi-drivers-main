import { GET_DRIVERS, SEARCH_BY_ID, SEARCH_BY_NAME } from "./action-type"
import axios from "axios"

export const getDrivers = () => {
    try {
        const endpoint = "http://localhost:3001/drivers"
        return async (dispatch) => {
            const { data } = await axios.get(endpoint)
            console.log(data);
            return dispatch({
                type: GET_DRIVERS,
                payload: data
             })
            }
    } catch (error) {
        console.log("estoy rompiendo el dispacth");
    }
   
}

export const searchById = (id) => {
    try {
        const endpoint = `http://localhost:3001/drivers/${id}`
        return async(dispatch) => {
            const { data } = await axios.get(endpoint)
            if(data.name) {

                return dispatch({
                    type: SEARCH_BY_ID,
                    payload: data
                })
            }
        }
    } catch (error) {
        console.log(error.message);
    }
}

export const searchByName = (name) => {
    try {
        console.log("action", name);
        const endpoint = `http://localhost:3001/drivers/name?name=${name}`
        return async(dispatch) => {
            const { data } = await axios.get(endpoint)
            console.log(data);
            if(data.name) {
                return dispatch({
                    type: SEARCH_BY_NAME,
                    payload: data
                })
            }
        }
    } catch (error) {
        console.log(error.message);
    }
}
// SEARCH_BY_NAME