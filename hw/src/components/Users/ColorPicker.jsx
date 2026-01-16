export default function ColorPicker({setColor, setPath, applyColor}){
    
    return(<><br/>
        <input type="color" onChange={setColor}/><br/>
        <input type="text" onChange={setPath}/><br/>
        <button onClick={applyColor}>Apply color</button>
    </>);
}