import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router"
import BackButton from "../components/Controls/BackButton";
import CountryInfo from "./CountryRoute/CountryInfo";

export default function CountryRoute(){
    const country = useLoaderData();

    return<><h1>Country</h1>
        {country && <CountryInfo country={country}/>}<br/>
        <BackButton/>
    </>
}