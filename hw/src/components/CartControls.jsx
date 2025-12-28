import { useEffect, useState } from "react";

export default function CartControls({addProduct, removeProduct, emptyTheCart, setPrice, liftingActionCount}) {
    const [actionCount, setActionCount] = useState({count: 0, actions: {added: 0, removed: 0, cleaned: 0, priceChanged: 0}});

    const AddAction = (keyName) => {
        setActionCount(prev => ({...prev, count: prev.count + 1, actions: {...prev.actions, [keyName]: prev.actions[keyName] + 1}}));
    }

    const InputController = (e) => {
        setPrice(Math.abs(+e.target.value));
        AddAction("priceChanged");
    }

    useEffect(() => {liftingActionCount(actionCount);}, [actionCount])

    return(
        <>
            <button onClick={() => {addProduct(); AddAction("added")}}>Add item</button>
            <button onClick={() => {removeProduct(); AddAction("removed")}}>Remove item</button>
            <button onClick={() => {emptyTheCart(); AddAction("cleaned")}}>Clear cart</button>
            <input placeholder="Ціна товару" onInput={InputController} type="number"></input>
        </>
    )
}