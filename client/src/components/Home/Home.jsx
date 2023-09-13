import style from "./Home.module.css"
import SearchBar from "../SearchBar/SearchBar"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterByOrigen, filterByTeams, getDrivers, getTeams, orderAlfabeticamente, orderFechaNacimiento, searchByName } from "../../Redux/action"
import CardDriver from "../Card/CardDriver"
import Paginacion from "../Paginacion"
import { Link } from "react-router-dom"
import Nav from "../Nav/Nav"




const Home = () => {

    const drivers = useSelector((state) => state.drivers)
    const teams = useSelector((state) => state.teams)
    const dispatch = useDispatch()
    const [cards, setCards] = useState([])

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

    useEffect(() => {
        dispatch(getTeams())
        if(!drivers.length) {
            dispatch(getDrivers())

        }

    }, [dispatch])


    return (
        <div >
            <div className={style.div}>

                <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
                <Nav setPagina={setPagina} />


            </div>

            <div className={style.divCard}>

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
            </div>
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