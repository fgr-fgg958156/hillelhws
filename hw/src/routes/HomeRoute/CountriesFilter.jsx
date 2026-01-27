import SelectFilter from "../../components/Controls/SelectFilter";

export default function CountriesFilter({countries, setFilter}) {
    return(
        <SelectFilter setFilter={setFilter} array={countries} filterKey={"region"}/>
    );
}