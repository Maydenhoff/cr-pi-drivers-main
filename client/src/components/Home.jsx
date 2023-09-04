import SearchBar from "./SearchBar"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDrivers, searchByName } from "../Redux/action"
import CardDriver from "./CardDriver"

const Home = () => {

    const drivers = useSelector((state)=> state.drivers)
    const dispatch = useDispatch()
    const [cards, setCards] = useState("")
    const driverForName = useSelector((state)=> state.driverForName)

    // const cartas = async () => {

    //     try {
    //         const URL = "http://localhost:3001/drivers"
    //         const {data} = await axios(URL)
    //         for (let i=0; i<10; i++) {
    //             return data[i]
    //         }
    //     } catch (error) {
            
    //     }
    // }
    // funcion poara guardar la busqueda en el estado local
    const handleChange = (event) =>{
        event.preventDefault() // cada vez q uisas funcion de busqeda.
        const valor = event.target.value
        setCards(valor)
    } 
    
    const handleSubmit = (event) => {
        event.preventDefault()
       dispatch(searchByName(cards))

    }

    
    useEffect(()=>{
            dispatch(getDrivers())
        
        
    },[dispatch])
    
    console.log(cards);

    return (
    <div>
        <SearchBar handleSubmit={handleSubmit} handleChange={handleChange}/>
        {
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
        }
        <div>
        </div>
    </div>
    )
}

export default Home