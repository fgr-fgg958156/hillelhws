export default function CartStatistics({actionsCount}) {
    return(
        <>
            <p>actions count: {actionsCount.count}</p>
            <details> 
                <summary>details:</summary>
                <ul>{Object.keys(actionsCount.actions).map((item, index) => (<li key={`${index}-${item}`}>{item} : {actionsCount.actions[item]}</li>))}</ul>
            </details>
        </>
    )
}