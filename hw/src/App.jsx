import React, {useEffect, useState} from "react";
import CartSummary from "./components/CartSummary";
import CartControls from "./components/CartControls";
import CartStatistics from "./components/CartStatistics";

export default function App(){
  const [itemsCount, setItemsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [actionsCount, setActionsCount] = useState({count: 0, actions: {added: 0, removed: 0, cleaned: 0, priceChanged: 0}});
  const [price, setPrice] = useState(100);

  useEffect(() => setTotalPrice(itemsCount * price), [itemsCount, price])

  const addProduct = () => {
    setItemsCount(prevState => (prevState + 1));
  }

  const removeProduct = () => {
    setItemsCount(prevState => (prevState > 0 ? prevState - 1 : 0));
  }

  const emptyTheCart = () => {
    setItemsCount(0);
  }

  return (
    <>
      <CartSummary itemsCount={itemsCount} totalPrice={totalPrice}/>
      <CartControls addProduct={addProduct} removeProduct={removeProduct} emptyTheCart={emptyTheCart} setPrice={setPrice} liftingActionCount={setActionsCount}/>
      <CartStatistics actionsCount={actionsCount}/>
    </>
  )
}
