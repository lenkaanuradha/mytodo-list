import React from 'react';
export default function Plan(props) {
       
  return (
    
    <>
        <li className="shadow p-2  col-sm-9">{props.value} </li>
         <button className="btn btn-primary my-2 col-sm-2 p-1 offset-1" onClick={()=>{props.sendData(props.id)}}>Del</button>
       
         </>
   
  )
}
