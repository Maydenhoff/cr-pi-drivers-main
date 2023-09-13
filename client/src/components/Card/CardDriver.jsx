import { useDispatch } from "react-redux"
import { deleteDriver } from "../../Redux/action"
import style from "./Card.module.css"
import { Link } from "react-router-dom"

const CardDriver = ({ id, image, name, teams, dob }) => {
const dispatch = useDispatch()
    let indice = 0
    
    const onClose = (id) => {
        console.log("si");
        console.log(id);
        dispatch(deleteDriver(id))
    }
    return (
        <div className={style.card}>
            <div>
            {typeof id !== "number" ?
               (
                  <button onClick={()=>onClose(id)} >❌</button>
               ) : (
                  ""
               )
}
                
                <h1 className={style.name}>{name}</h1>
                <Link to={`/driver/${id}`}>
                    <img className={style.image} src={image.url} alt={image.imageby} />
                </Link>
                <h4 className={style.team}>Escuderias: {teams?.map((e) => {
                    indice = indice + 1
                    if (indice === teams.length) {
                        return e
                    } else {
                        return e + "/ "

                    }

                }
                )
                }
                </h4>

            </div>
        </div>
    )
}

export default CardDriver