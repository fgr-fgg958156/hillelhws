import {Link} from 'react-router'

export default function CountriesList({countries}){
    return(
        <ul>
            {countries.map(item=>(<li key={item.cca2}><Link to={`/countries/${item.cca2}`}>{item.name.official } {item.flag}</Link></li>))}
        </ul>
    );
}