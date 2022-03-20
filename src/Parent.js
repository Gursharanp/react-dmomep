import React from 'react'
import Child from "./Child"

function Parent (){

  const[name,setName]=React.useState("");
  let handleChange=(e)=>{
    setName(e.target.value);
  }
  return(
    <>
     <input type="text" onChange={handleChange}/>
    <Child name={name}/>
    </>
  )
}
export default Parent