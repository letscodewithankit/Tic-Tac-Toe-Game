import React, { useState } from 'react';
import '../App.css';
import Square from './Square';




export default function Board() {

  const [state,setState]=useState(Array(9).fill(null));
  const [isXturn,setIsXturn]=useState(true);

  const Winner=()=>
  {
    const isWinner=
    [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [6,4,2]

    ];
    

    for(let logic of isWinner )
    {
      const [a,b,c]=logic;
      if(state[a]!==null && state[a]===state[b] && state[a]===state[c])
      {
        return state[a];
      }
      
    }
    return false;
        
  }
const isWinnerget= Winner();
  
  
  const handleClick=(index)=>{
    console.log(index);
    const CopyState=[...state];
    CopyState[index]=isXturn ? "X":"O";
    setState(CopyState);
    setIsXturn(!isXturn);
  }
  
    
  return (
    isWinnerget?
    <>
    <div style={{justifyContent:"center",textAlign:"center",display:"flex"}}>
    {isWinnerget} is won the game<br/>
    <button onClick={()=>window.location.reload()} >Play again</button>
    </div>
    </>:
   
    <div className='container22'>
       <h2 style={{textAlign:"center"}}>Player {isXturn?"X":"O"} please Move</h2>
      <br/>
      <div className='row22'>
        <Square onClick={()=>{handleClick(0)}} value={state[0]}/>
        <Square onClick={()=>{handleClick(1)}} value={state[1]}/>
        <Square onClick={()=>{handleClick(2)}} value={state[2]}/>
      </div>
      <div className='row22'>
        <Square onClick={()=>{handleClick(3)}} value={state[3]}/>
        <Square onClick={()=>{handleClick(4)}} value={state[4]}/>
        <Square onClick={()=>{handleClick(5)}} value={state[5]}/>
      </div>  
      <div className='row22'>
        <Square onClick={()=>{handleClick(6)}} value={state[6]}/>
        <Square onClick={()=>{handleClick(7)}} value={state[7]}/>
        <Square onClick={()=>{handleClick(8)}} value={state[8]}/>
      </div>
    </div>
  )
}
