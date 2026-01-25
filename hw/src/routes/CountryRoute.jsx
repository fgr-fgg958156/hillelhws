import { useState, useEffect } from "react";
import { useParams } from "react-router"
import BackButton from "../components/Controls/BackButton";

export default function CountryRoute(){
    const {code} = useParams();
    const [country, setCountry] = useState(null);

    const getData=async()=>{
        try{
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
            if(!response.ok){
                throw new Error(`error: ${response.status}`);
            }

            const data = await response.json();

            console.log(data);
            setCountry(data[0]);
        }
        catch (err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getData();
    },[]);

    const objectToListItem = (obj, id, name) => {
        return(
            <li key={id}>
                <b>{name}</b> : 
                <ul>
                    {Object.keys(obj).map((keyName) => (obj[keyName] && typeof(obj[keyName]) === "object" && !Array.isArray(obj[keyName]) ? objectToListItem(obj[keyName], `${id}-${keyName}`, keyName) : <li key={`${id}-${keyName}`}><b>{keyName}</b> : {Array.isArray(obj[keyName]) ? obj[keyName].join(", ") : obj[keyName]}</li>))}
                </ul>
            </li>
        )
    }

    return<><h1>Country</h1>
    {country !== null ? <>{objectToListItem(country, country.cca2, country.cca2)}</> : null}<br/>
    <BackButton/>
    </>
}