import style from "./Detail.module.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { searchById } from "../../Redux/action"

const Detail = () => {
    const dispatch = useDispatch()
    const detail = useSelector((state) => state.detail)
    const { id } = useParams()

    useEffect(() => {
        dispatch(searchById(id))
        console.log("aca", detail);
    }, [id])
    return (
        <div >
            {detail ?
                (
                    <div className={style.divConteiner}>
                        <div className={style.divConteinerImage}>
                            <img className={style.image} src={detail.image?.url} alt={detail.imageby} />
                        </div>
                        <div className={style.divContainerInfo}>

                            <h1 className={style.name}>{detail.name}</h1>
                            <h1 className={style.info}>ID:{detail.id}</h1>
                            <h2 className={style.info}>Fecha de nacimiento: {detail.dob}</h2>
                            <h2 className={style.info}>Nacionalidad: {detail.nationality}</h2>
                            <h2 className={style.description}>{detail.description}</h2>
                            <h3 className={style.info}>{detail.teams}</h3>
                            {console.log("aca",detail.teams)}
                        </div>
                    </div>
                )
                : null}
        </div>
    )

}

export default Detail