import {useState, useEffect } from "react";import {NavLink} from 'react-router'

import SelectFilter from "../components/Controls/SelectFilter";

export default function HomeRoute(){
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState("All");

     const getData=async()=>{
        try{
            const response = await fetch('https://restcountries.com/v3.1/all?fields=name,cca2,flag,region');
            if(!response.ok){
                throw new Error(`error: ${response.status}`);
            }

            const data = await response.json();

            console.log(data);
            setCountries(data);
        }
        catch (err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getData();
    },[])

    const filteredCountries = filter === "All" ? countries : countries.filter(c => c.region === filter);

    return<><h1>HOME</h1>
    <SelectFilter setFilter={setFilter} array={countries} filterKey={"region"}/>
    <ul>
        {filteredCountries.map(item=>(<li key={item.cca2}><NavLink to={`/countries/${item.cca2}`}>{item.name.official } {item.flag}</NavLink></li>))}
    </ul>
    </>
}