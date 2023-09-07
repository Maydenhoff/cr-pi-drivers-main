import { FILTER_BY_TEAMS, GET_DRIVERS, GET_TEAMS, ORDER_ALFABETICAMENTE, ORDER_FECHA_NACIMIENTO, SEARCH_BY_ID, SEARCH_BY_NAME } from "./action-type";

const initialState = {
    drivers: [],
    allDrivers: [],
    detail: [] ,
    driverForName: [],
    teams: []
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
            console.log("esto esoy buyscando", action.payload)
            return {
                ...state,
                drivers: action.payload
            }
        case GET_TEAMS:
            return {
                ...state,
                teams: action.payload
            }
        case ORDER_ALFABETICAMENTE:
            const copyDrivers = [...state.drivers]
            return {
                ...state,
                drivers:
                action.payload === "nombreAscendente"
                ? copyDrivers.sort(
                    (a,b) =>
                a.name.forename.toLowerCase().charCodeAt(0) -
                b.name.forename.toLowerCase().charCodeAt(0)
                )
                :copyDrivers.sort(
                    (a,b) =>
                    b.name.forename.toLowerCase().charCodeAt(0) -
                    a.name.forename.toLowerCase().charCodeAt(0)
                )
            }
            case ORDER_FECHA_NACIMIENTO:

            console.log("esto buyscp",action.payload);
                const copyDriversNacimiento = [...state.drivers]
                
                const compararFechasNacimiento = (a,b) => {
                    const fechaA = new Date(a.dob)
                    const fechaB = new Date(b.dob)

                    if(fechaA < fechaB) {
                        return 1
                    } else if(fechaA>fechaB) {
                        return -1
                    } else return 0
                }
                // copyDriversNacimiento.sort(compararFechasNacimiento)
                
                return {
                    ...state,
                    drivers: 
                    action.payload === "fechaAscendente"
                    ?copyDriversNacimiento.sort(compararFechasNacimiento)
                    :copyDriversNacimiento.sort(compararFechasNacimiento).reverse()
                    
                }
            case FILTER_BY_TEAMS : 
            console.log(action.payload);
            const copyDriversTeams = [...state.drivers]
            let driverFiltrado = []
            for (let i=0; i<copyDriversTeams.length; i++) {
                if(copyDriversTeams[i].teams) {
                    let team = copyDriversTeams[i].teams?.split(",")
                    if(team.includes(action.payload)) {
                        driverFiltrado.push(copyDriversTeams[i])
                    }
                }
            }
   
                return {
                    ...state,
                    drivers: driverFiltrado
                }
 
 
 default:
            return {...state}
    }
}

export default reduce;