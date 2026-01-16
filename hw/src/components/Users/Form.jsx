import React, {useState, useRef} from "react";
import service from "../../services/user";

export default function Form(){
    const [form, setForm] = useState({name:"", username:"", email:"", address:{street:"", suite:"", city:"", zipcode:"", geo:{lat:"", lng:""}}, phone:"", website:"", company:{name:"", catchPhrase:"", bs:""}})

    const handleInput = (e, path) =>{
        const value = e.target.value;
        const keys = path.split("-").slice(1);

        setForm(prevState => {
            const update=(obj, path)=>{
                const [current, ...rest]=path;

                if(rest.length === 0){
                    return{...obj, [current] : value}
                }

                return{...obj, [current]: update(obj[current], rest)};
            }

            return(update(prevState, keys));
        });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(form);
        service.post(form);
    }

    const InputItems = (obj, name) => {
        return(Object.keys(obj).map(item => (typeof(obj[item]) === "object" ? InputItems(obj[item], `${name}-${item}`) : <React.Fragment key={`${name}-${item}`}><label>{`${name}-${item}`}:<input onChange={(e)=>handleInput(e, `${name}-${item}`)}></input></label><br/></React.Fragment>)))
    }

    return(
        <form className="form" onSubmit={handleSubmit}>
            {InputItems(form, "form")}<br/>
            <button>Submit</button>
        </form>
    )
}