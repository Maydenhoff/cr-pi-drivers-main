import { useEffect, useState } from "react";
import { searchByName } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = ({handleChange, handleSubmit}) => {
    const dispatch = useDispatch()
    const driverForName = useSelector((state) => state.driverForName)
    
 


    // useEffect(()=>{
    //     dispatch(getDrivers())
    //     console.log(drivers);
    // },[])
    return (
    <div>
        <input name="search" onChange={handleChange}></input>
        <button onClick={handleSubmit}>Search</button>
    </div>
    )
}

export default SearchBar