export async function HomeLoader () {
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,cca2,flag,region');

    if(!response.ok){
        throw new Error(`error: ${response.status}`);
    }

    const data = await response.json();
    return(data);
}