import SearchBar from "./SearchBar"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterByOrigen, filterByTeams, getDrivers, getTeams, orderAlfabeticamente, orderFechaNacimiento, searchByName } from "../Redux/action"
import CardDriver from "./CardDriver"
import Paginacion from "./Paginacion"




const Home = () => {

    const drivers = useSelector((state) => state.drivers)
    const teams = useSelector((state) => state.teams)
    const dispatch = useDispatch()
    const [cards, setCards] = useState([])
    const driverForName = useSelector((state) => state.driverForName)

    //paginado
    const [pagina, setPagina] = useState(1)
    const [porPagina, setPorPagina] = useState(9)

    const maximo = Math.ceil(drivers.length / porPagina)


    // funcion poara guardar la busqueda en el estado local
    const handleChange = (event) => {
        event.preventDefault() // cada vez q uisas funcion de busqeda.
        const valor = event.target.value
        setCards(valor)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("acaa", event.target);
        dispatch(searchByName(cards))

    }

    const handleOrder = (event) => {
        dispatch(orderAlfabeticamente(event.target.value))
        // console.log(event.target.value);
    }

    const handleFechaOrder = (event) => {
        dispatch(orderFechaNacimiento(event.target.value))
    }

    const handleTeam = (event) => {
        console.log(event.target.value);
        dispatch(filterByTeams(event.target.value))
    }

    const handleOrigen = (event) => {
        console.log(event.target.value);
        dispatch(filterByOrigen(event.target.value))
    }

    useEffect(() => {
        dispatch(getDrivers())
        dispatch(getTeams())

    }, [dispatch])


    return (
        <div>
            <div>

                <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
                <select onChange={handleOrder}>
                    <option value="nombreAscendente">Nombre(ascendente)</option>
                    <option value="nombreDescendiente">Nombre(descendente)</option>
                </select>
                <select onChange={handleFechaOrder}>
                    <option value="fechaAscendente">Fecha de Nacimiento(ascendente)</option>
                    <option value="fechaDescendiente">Fecha de Nacimiento(descendente)</option>
                </select>
                <select onChange={handleTeam}>
                    {teams.map((team) => {
                        return (
                            <option value={team}>{team}</option>
                        )
                    })}
                </select>
                <select onChange={handleOrigen}>
                    <option value="allDrivers">All Drivers</option>
                    <option value="creados">Creados</option>
                    <option value="API">API</option>
                </select>
                {/* <select onchange={handleOrigen}>
                    <option value="allDrivers">All Drivers</option>
                    <option value="creados">Creados</option>
                    <option value="API">API</option>
                </select> */}

            </div>

            {drivers
                ? drivers.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
                    .map((driver) => {
                        return (
                            <CardDriver
                                key={driver.id}
                                id={driver.id}
                                image={driver.image}
                                name={driver.name}
                                teams={driver.teams}
                                dob={driver.dob}

                            />
                        )
                    })
                : window.alert("No hay cartas")
            }
            <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
            {/* {
            drivers.map((driver) => {
                return (
                    <CardDriver 
                    key= {driver.id}
                    id= {driver.id}
                    image= {driver.image} 
                    name= {driver.name}
                    teams = {driver.teams}
                    
                    />
                    )
                }) 
            } */}

        </div>
    )
}

export default Home