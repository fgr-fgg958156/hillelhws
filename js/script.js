const rootContainer = document.querySelector(`#root`);
const rootContainerReact = ReactDOM.createRoot(rootContainer);

const objectToListItem = (obj, id, name) => {
    return(
        <li key={id}>
            <b>{name}</b> : 
            <ul>
                {Object.keys(obj).map((keyName) => (obj[keyName] && typeof(obj[keyName]) === "object" && !Array.isArray(obj[keyName]) ? objectToListItem(obj[keyName], `${id}-${keyName}`, keyName) : <li key={`${id}-${keyName}`}><b>{keyName}</b> : {Array.isArray(obj[keyName]) ? obj[keyName].join(", ") : obj[keyName]}</li>))}
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