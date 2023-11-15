import React from 'react'

export default function Square(props) {
  return (
    <div style={{border:"2px solid black",height:"100px" ,width:"100%",display:"flex",justifyContent:"center",textAlign:"center"}}
    onClick={props.onClick}>
        {props.value}
    </div>
  )
}
