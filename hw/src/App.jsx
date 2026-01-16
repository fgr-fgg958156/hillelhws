import React, {useEffect, useState} from "react";
import Users from "./components/Users/Users";
import Form from "./components/Users/Form";
import ColorPicker from "./components/Users/ColorPicker";

export default function App(){
  const [color, setColor] = useState();
  const [path, setPath] = useState();
  const ApplyColor=()=>{

  }
  return (
    <>
    <Form/>
    {/* <ColorPicker setColor={setColor} setPath={setPath} applyColor={ApplyColor}/> */}
    <Users/>
    </>
  )
}
