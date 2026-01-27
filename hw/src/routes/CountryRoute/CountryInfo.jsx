export default function CountryInfo({country}){
    
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
    
    return(<>{country !== null ? <>{objectToListItem(country, country.cca2, country.cca2)}</> : null}</>);
}