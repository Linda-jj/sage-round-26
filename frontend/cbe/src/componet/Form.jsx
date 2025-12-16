import { useState,useEffect, useRef } from "react"



export default function Form(){
const [name,setName]=useState()
const count=useRef(0)
useEffect(()=>{
    console.log("render from from!")
    count.current++;
})

    return<>
    <h2>Render count : {count.current}</h2>
    <form className="form" >
       
    
        <label for="name">Name :</label>
        <input className="formI"
        type="text"
        id="name"
        value={name}
        onChange={(e)=>{
        
            setName(e.target.value)
        }}

        /> 

    </form>
    <h1 className="form" >Your Name is : {name}</h1>
    </>
}