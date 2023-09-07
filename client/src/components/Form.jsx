import { useDispatch, useSelector } from "react-redux"
import { getTeams } from "../Redux/action"
import { useEffect } from "react"

const CrearDriver = () => {
    const dispatch = useDispatch()
    const teams = useSelector((state) => state.teams)

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    useEffect(() => {
        dispatch(getTeams())
    }, [])
    console.log(teams);



    return (

        <div>
            <form onSubmit={handleSubmit}>

                <label>Nombre:</label>
                <input name="name" />

                <label>Apellido:</label>
                <input name="surname" />

                <label>Nacionalidad:</label>
                <input name="nationality" />

                <label>Imagen:</label>
                <input name="image" />

                <label>Fecha de nacimiento:</label>
                <input name="dob" />

                <label>Escuderías:</label>
                <select>

                    {teams.map((team) => {
                        return (
                            <option>{team}</option>
                        )
                    })}
                </select>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default CrearDriver