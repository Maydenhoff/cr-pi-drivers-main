import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { searchById } from "../Redux/action"

const Detail = () => {
   const dispatch = useDispatch() 
   const detail = useSelector((state) => state.detail)
   const { id } = useParams()

   useEffect(() =>{
        dispatch(searchById(id))
        console.log("aca",detail);
   }, [id])
    return (
        <div>
            {detail ?
                (
            <div>
                <h1>{`${detail.name?.forename} ${detail.name?.surname}`}</h1>
                <img src={detail.image?.url} alt={detail.imageby} />
                
                <h2>{detail.dob}</h2>
                <h2>{detail.nationality}</h2>
                <h2>{detail.description}</h2>
                {/* <h3>{detail.teams}</h3> */}
                    </div>
                )
                : null}
        </div>
    )

}

export default Detail