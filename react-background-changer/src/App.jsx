import { useState } from 'react'
import { RecoilRoot, useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import { colorAtom } from './store/atoms/color';

function App() {

  return (
    <div>
      <RecoilRoot>
        <Background />
      </RecoilRoot>
    </div>
  )
}

function Background(){

  const color = useRecoilValue(colorAtom);
  console.log(color);
  return <div style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'end', backgroundColor: color}}>
        <Buttons />
  </div>
}

function Buttons()
{
  const setColor = useSetRecoilState(colorAtom);
  console.log("Button rendered");

  return <div style={{height: '70px', width: '50%', borderRadius: '10px', boxShadow: '5px 5px 5px 3px #888888', display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '40px'}}>
    <button style={{backgroundColor: 'red', padding: '10px', borderRadius: '5px'}} onClick={() => {
      setColor("red");
    }}>Red</button>
    <button style={{backgroundColor: 'yellow', padding: '10px', borderRadius: '5px'}} onClick={() => {
      setColor("yellow");
    }}>Yellow</button>
    <button style={{backgroundColor: 'black',color:'white', padding: '10px', borderRadius: '5px'}} onClick={() => {
      setColor("black")
    }}>Black</button>
    <button style={{backgroundColor: 'purple', padding: '10px', borderRadius: '5px'}} onClick={()=>{
      setColor("purple")
    }}>Purple</button>
    <button style={{backgroundColor: 'green', padding: '10px', borderRadius: '5px'}} onClick={()=>{
      setColor("green")
    }}>Green</button>
    <button style={{backgroundColor: 'blue', padding: '10px', borderRadius: '5px'}} onClick={()=>{
      setColor("blue")
    }}>Blue</button>
    <button style={{backgroundColor: 'white', padding: '10px', borderRadius: '5px'}} onClick={()=> {
      setColor("white")
    }}>Default</button>
  </div>
}

export default App
