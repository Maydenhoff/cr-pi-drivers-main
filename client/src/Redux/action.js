import { FILTER_BY_TEAMS, GET_DRIVERS, GET_TEAMS, ORDER_ALFABETICAMENTE, ORDER_FECHA_NACIMIENTO, SEARCH_BY_ID, SEARCH_BY_NAME } from "./action-type"
import axios from "axios"

export const getDrivers = () => {
    try {
        const endpoint = "http://localhost:3001/drivers"
        return async (dispatch) => {
            const { data } = await axios.get(endpoint)
            // console.log(data);
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
            console.log("lo q buscoi",data)

            if(data) {
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

export const getTeams = () => {
    try {
        const endpoint = "http://localhost:3001/teams"
        return async(dispatch) => {
            const { data } = await axios.get(endpoint)
            // console.log(data);
            return dispatch({
                type:GET_TEAMS,
                payload:data
            })
        }
    } catch (error) {
        
    }
    

}

export const orderAlfabeticamente = (orden) => {
    return { type: ORDER_ALFABETICAMENTE, payload: orden}
}


export const orderFechaNacimiento = (orden) => {
    return {type: ORDER_FECHA_NACIMIENTO, payload: orden}
}

export const filterByTeams = (team) => {
    return {type: FILTER_BY_TEAMS, payload: team}
}
// SEARCH_BY_NAME