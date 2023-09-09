import { useDispatch, useSelector } from "react-redux"
import { createNewDriver, getTeams } from "../Redux/action"
import { useEffect, useState } from "react"
import validation from "./validation"

const CrearDriver = () => {
    const dispatch = useDispatch()
    const teams = useSelector((state) => state.teams)
    const [userData, setUserData] = useState({
        name: "",
        surname: "",
        nationality: "",
        image: "",
        dob: "",
        team: [],

    })

    const [errors, setErrors] = useState({
        name: "",
        surname: "",
        nationality: "",
        image: "",
        dob: "",
    })



    const handleChange = (event) => {
            if(event.target.name === "team") {
                if(!userData.team.includes(event.target.value)) {
                    setUserData({...userData, team: [...userData.team, event.target.value]})
                } else {
                    setUserData({...userData, team: userData.team.filter((e)=> e !== event.target.value )})
                }
                
            } else {

                
                
                setUserData({ ...userData, [event.target.name]: event.target.value })
                console.log(event.target.name);
                // validation(event.target, setErrors)
                validation(event.target, setErrors)
            }
    }

    console.log(errors.name.length)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!userData.name.length || !userData.surname.length || !userData.nationality.length || !userData.image.length || !userData.dob.length) {
            window.alert("Falta info rey")
        } else {
            if (!errors.name.length && !errors.surname.length && !errors.nationality.length && !errors.image.length && !errors.dob.length) {
                // window.alert("TODO OK")
                dispatch(createNewDriver(userData))

            } else {
                window.alert("Hay errores")
            }
        }
    }


    useEffect(() => {
        dispatch(getTeams())
    }, [])



    return (

        <div>
            <p>{JSON.stringify(errors)}</p>
            <form onSubmit={handleSubmit}>

                <label>Nombre:</label>
                <input name="name" onChange={handleChange} />

                <br />

                <label>Apellido:</label>
                <input name="surname" onChange={handleChange} />

                <br />

                <label>Nacionalidad:</label>
                <input name="nationality" onChange={handleChange} />

                <br />

                <label>Imagen:</label>
                <input name="image" onChange={handleChange} />

                <br />

                <label>Fecha de nacimiento:</label>
                <input type="date" name="dob" onChange={handleChange} />

                <br />

                <label>Escuderías:</label>
                <select multiple name="team"  onChange={handleChange}>
                    <option disabled={true} value="">
                        --Choose and option--
                    </option>

                    {teams.map((team) => {
                        return (
                            
                            <option value ={team} key={team}>{team}</option>
                        )
                    })}
                </select>

                <br />
                <p> Temas seleccionados: {userData.team}</p>

                <button type="submit"  >Submit</button>
            </form>
            <p>{JSON.stringify(userData)}</p>

        </div>
    )
}

export default CrearDriver