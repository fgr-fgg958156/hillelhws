export async function CountryLoader ({params}) {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${params.code}`);
    if(!response.ok){
            throw new Error(`error: ${response.status}`);
    }

    const data = await response.json();
    return data[0];
}