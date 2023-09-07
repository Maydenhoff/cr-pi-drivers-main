import { Link } from "react-router-dom"

const CardDriver = ({id, image, name,teams,dob }) => {
    return (
        <div>
            <Link to={`/driver/${id}`}>
            <h1>Esta es mi carta {id}</h1>
            <img src={image.url} alt={image.imageby} />
            <h2>{name.forename}</h2>
            <h2>{teams}</h2>
            <h2>{dob}</h2>
            {/* <h2>{teams}</h2> */}
            </Link>

        </div>
    )
}

export default CardDriver