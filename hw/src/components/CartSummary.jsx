export default function CartSummary({itemsCount, totalPrice}) {
    return(
        <>
            <p>кількість товарів у кошику: {itemsCount} <br/>загальна сума: {totalPrice} ₴</p>
        </>
    )
}