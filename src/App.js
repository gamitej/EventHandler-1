import React, { useState } from 'react';
import './styles.css';
const App =()=>{
  const [text,setText] = useState('Click Me!!');
  const [backg,setBackg] = useState('#008B8B');
  const [bg,setBg] = useState('#87CEFA');
  // Mouse
  const [name,setName] = useState('Mouse Here!!');
  const [chan,setChan] = useState('#F87217');
  const [bgr,setBgr] = useState('#E67451');
  const funC=()=>{
    setText('Double Click ME!!');
    setBackg('#FF00FF');
    setBg('#F535AA');
  }
  const dunc =()=>{
    setText('Wooo!!');
    setBackg('#7F38EC');
    setBg('#B041FF');
  }
  const ent =()=>{
    setName('Leave');
    setChan('#E5E4E2');
    setBgr('#98AFC7');
  }
  const exit =()=>{
    setName('Enter');
    setChan('#6CC417');
    setBgr('#348017');
  }
  return (
    <>
      <div style={{background:chan}}>
        <button
        style={{background:bgr, borderRadius:'20px'}}
        onMouseEnter = {ent}
        onMouseLeave = {exit}>
        {name}</button>
      </div>
      <div style={{background:backg}}>
        <button
        style={{background:bg, borderRadius:'20px'}}
        onDoubleClick={dunc}
        onClick={funC}>
        {text}</button>
      </div>
    </>
  )
}

export default App;