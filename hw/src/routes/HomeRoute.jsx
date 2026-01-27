import {useState, useEffect } from "react";
import CountriesFilter from "./HomeRoute/CountriesFilter";
import CountriesList from "./HomeRoute/CountriesList";
import { useLoaderData } from "react-router";

export default function HomeRoute(){
    const countries = useLoaderData();
    const [filter, setFilter] = useState("All");

    const filteredCountries = filter === "All" ? countries : countries.filter(c => c.region === filter);

    return<><h1>HOME</h1>
    <CountriesFilter setFilter={setFilter} countries={countries}/>
    <CountriesList countries={filteredCountries}/>
    </>
}