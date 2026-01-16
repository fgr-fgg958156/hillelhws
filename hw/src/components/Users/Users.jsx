import React, {useState, useEffect} from "react";
import service from "../../services/user";


export default function Users(){
    const[users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try{
            const response = await service.get();
            setUsers(response);
        }
        catch(err){
            console.log(err);
        }
    }

    const setByPath=(item, path, value)=>{
        const keys = path.split("-");
        const newObj = structuredClone(item);

        let current = newObj;
        for(let i=0;i<keys.length-1;i++){
            if(typeof current[keys[i]] !== "object" || current[keys[i]] === null)
                current[keys[i]] = {};
            current = current[keys[i]];
        }

        current[keys[keys.length - 1]] = value;
        return newObj;
    }

    const changeKeyInfo = async (item) => {
        const key = prompt("Enter path to key:", `name`);
        if(!key || key === "id") return;

        const value = prompt("Enter new value:", `Lorem ipsum`);
        if(value === null) return;

        try{
            await service.put(item.id, setByPath(item, key, value));
            fetchUsers();
        }
        catch(err){
            console.log(err);
        }
    }

    const deleteItem = async(item) => {
        try{
            await service.delete(item.id);
            fetchUsers();
        }
        catch(err){
            console.log(err);
        }
    }

    const objectToListItem = (obj, id, name) => {
        return(
            <li key={`${name}-${id}`}>
                <details key={id}>
                    <summary>{name}</summary>
                    <ul>
                        {Object.keys(obj).map((keyName) => (obj[keyName] && typeof(obj[keyName]) === "object" && !Array.isArray(obj[keyName]) ? objectToListItem(obj[keyName], `${id}-${keyName}`, keyName) : <li key={`${id}-${keyName}`}><b>{keyName}</b> : {Array.isArray(obj[keyName]) ? obj[keyName].join(", ") : obj[keyName]}</li>))}
                    </ul>
                </details>
                {name === `user-${id}` && <><button onClick={() => changeKeyInfo(obj)}>Change key information</button><button onClick={() => deleteItem(obj)}>Delete item</button></>}
            </li>
        )
    }

    useEffect(()=>{
        fetchUsers();
    },[]);

    return users.length ? (
        <ul>
            {users.map((item) => (objectToListItem(item, item.id, `user-${item.id}`)))}
        </ul>
    ) : null
}