import { useState } from "react"

const Paginacion = ({pagina, setPagina, maximo}) => {

    const [input, setInput] = useState(1)

    const nextPage = ()=> {
        setInput(parseInt(input)+1)
        setPagina(parseInt(pagina) +1)
    }
    const previousPage = ()=> {
        setInput(parseInt(input)-1)
        setPagina(parseInt(pagina) -1)
    }

    const onkeyDown = (e) => {
        if(e.keyCode === 13) {
            setPagina(perseInt(e.target.value))
if(
    parseInt(e.target.value < 1) || 
    parseInt(e.target.value) > Math.ceil(maximo) || 
    isNaN(parseInt(e.target.value))) {
        setPagina(1)
        setInput(1)

    } else {
        setPagina(parseInt(e.target.value))
    }

        }
    }

    const onChange = (e)=> {
        setInput(e.target.value)

    }
    return (
       <div>
        <button disabled={pagina === 1 || pagina <1 } onClick={previousPage}>atras</button>
        <input onChange={(e) => onChange(e)} onkeyDown={(e) => onkeyDown(e)} name="page" autoComplete="off" value={input}/>
        <p> de {maximo}</p>
        <button disabled={pagina === Math.ceil(maximo) || pagina >  Math.ceil(maximo) } onClick={nextPage}>adelante</button>
       </div>
    )
}

export default Paginacion