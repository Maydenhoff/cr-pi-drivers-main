import {
  CREATE_NEW_DRIVER,
  DELETE_DRIVER,
  FILTER_BY_ORIGEN,
  FILTER_BY_TEAMS,
  GET_DRIVERS,
  GET_TEAMS,
  ORDER_ALFABETICAMENTE,
  ORDER_FECHA_NACIMIENTO,
  SEARCH_BY_ID,
  SEARCH_BY_NAME,
} from "./action-type";

const initialState = {
  drivers: [],
  allDrivers: [],
  detail: [],
  driverForName: [],
  teams: [],
};

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
        allDrivers: action.payload,
      };
    case SEARCH_BY_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case SEARCH_BY_NAME:
      console.log("esto esoy buyscando", action.payload);
      return {
        ...state,
        drivers: action.payload,
      };
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    case ORDER_ALFABETICAMENTE:
      const copyDrivers = [...state.drivers];
      return {
        ...state,
        drivers:
          action.payload === "nombreAscendente"
            ? copyDrivers.sort(
                (a, b) =>
                  a.name.toLowerCase().charCodeAt(0) -
                  b.name.toLowerCase().charCodeAt(0)
              )
            : copyDrivers.sort(
                (a, b) =>
                  b.name.toLowerCase().charCodeAt(0) -
                  a.name.toLowerCase().charCodeAt(0)
              ),
      };
    case ORDER_FECHA_NACIMIENTO:
      console.log("esto buyscp", action.payload);
      const copyDriversNacimiento = [...state.drivers];

      const compararFechasNacimiento = (a, b) => {
        const fechaA = new Date(a.dob);
        const fechaB = new Date(b.dob);

        if (fechaA < fechaB) {
          return 1;
        } else if (fechaA > fechaB) {
          return -1;
        } else return 0;
      };
      // copyDriversNacimiento.sort(compararFechasNacimiento)

      return {
        ...state,
        drivers:
          action.payload === "fechaAscendente"
            ? copyDriversNacimiento.sort(compararFechasNacimiento)
            : copyDriversNacimiento.sort(compararFechasNacimiento).reverse(),
      };
    case FILTER_BY_TEAMS:
      let copyDriver = state.allDrivers;
      console.log(copyDriver[0].teams);
      let filtrados = copyDriver.filter((e) =>
        e.teams?.includes(action.payload)
      );
      console.log(filtrados);
      return {
        ...state,
        drivers: filtrados,
      };
    case FILTER_BY_ORIGEN:
      let copyDriver2 = state.allDrivers;
      // console.log(copyDriver2);
      let fil;
      console.log(copyDriver2[1].image);
      if (action.payload === "API") {
        fil = copyDriver2.filter((e) => typeof e.image !== "string");
        console.log("aprete api", action.payload);
      } else if (action.payload === "creados") {
        fil = copyDriver2.filter((e) => typeof e.image !== "object");
        console.log("aprete creados", action.payload);
      } else fil = state.allDrivers;

      console.log(fil);
      return {
        ...state,
        drivers: fil,
      };

    case CREATE_NEW_DRIVER:
      
      return {
        ...state,
        drivers: [...state.drivers, action.payload],
        allDrivers: [...state.allDrivers, action.payload],
      };
      
      case DELETE_DRIVER: 
      return {
        drivers: action.payload,
        allDrivers:  action.payload,
        
      }
    default:
      return { ...state };
  }
};

export default reduce;
