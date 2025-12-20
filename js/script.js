const rootContainer = document.querySelector(`#root`);
const rootContainerReact = ReactDOM.createRoot(rootContainer);

const objectToListItem = (obj, id, name) => {
    return(
        <li key={id}>
            <b>{name}</b> : 
            <ul>
                {Object.keys(obj).map((keyName) => (typeof(obj[keyName]) === "object" ? objectToListItem(obj[keyName], `${id}-${keyName}`, keyName) : <li key={`${id}-${keyName}`}><b>{keyName}</b> : {obj[keyName]}</li>))}
            </ul>
        </li>
    )
}

rootContainerReact.render(
    <React.Fragment>
        <ul>
            {users.map((item) => (objectToListItem(item, item.id, `user-${item.id}`)))}
        </ul>
    </React.Fragment>
);