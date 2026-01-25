import { useEffect, useState } from "react"

export default function SelectFilter({setFilter, array, filterKey}){
    const [uniqueOptionsArray, setUniqueOptionsArray] = useState([]);

    const OptionFilter=()=>{
        if(!array) return;

        const newArray = array.map(item=>item[filterKey]);
        setUniqueOptionsArray([...new Set(newArray)]);
    }

    useEffect(()=>{
        OptionFilter();
    },[array])

    return(
        <>
        <select name="select" onChange={e => setFilter(e.target.value)}>
            {uniqueOptionsArray.map(item=>(<option>{item}</option>))}
            <option>All</option>
        </select>
        </>
    )
}