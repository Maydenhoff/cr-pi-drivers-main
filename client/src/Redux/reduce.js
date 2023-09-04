import { GET_DRIVERS, SEARCH_BY_ID, SEARCH_BY_NAME } from "./action-type";

const initialState = {
    drivers: [],
    allDrivers: [],
    detail: [] ,
    driverForName: []
}

const reduce = (state = initialState, action) => {
    switch (action.type) {
        case GET_DRIVERS:
            return {
                ...state,
                drivers: action.payload,
                allDrivers: action.payload,
            }            
        case SEARCH_BY_ID: 
        return {

            ...state,
            detail: action.payload
    
        }
        case SEARCH_BY_NAME:
            return {
                ...state,
                drivers: action.payload
            }
    
        default:
            return {...state}
    }
}

export default reduce;