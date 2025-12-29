import { useState } from "react"


export default function Calculator() {
const [value,setValue]=useState('');

return<div className="first">
        
            <div className="second">
          <div className="display">
  <input
    type="text"
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
</div>

            <div>
               <button className="first-btn"  value="AC" onClick={e=>setValue('0')} >AC</button>
               <button className="first-btn" value="DE" onClick={e=> setValue(value.slice(0,-1))} >DE</button>
             <button className="first-btn"  value='.' onClick={e=> setValue(value + e.target.value)}>.</button>




            </div>
               <div>
                <button className="first-btn"  value='9'onClick={e=> setValue(value + e.target.value)}>9</button>
                <button className="first-btn"  value='8' onClick={e=> setValue(value + e.target.value)}>8</button>
                <button className="first-btn"  value='7'onClick={e=> setValue(value + e.target.value)}>7</button>
                <button className="first-btnO"  value='+' onClick={e=> setValue(value + e.target.value)}>+</button>
            </div>
               <div>
                <button className="first-btn"  value='6'onClick={e=> setValue(value + e.target.value)}>6</button>
                <button className="first-btn"  value='5' onClick={e=> setValue(value + e.target.value)}>5</button>
                <button className="first-btn"  value='4'onClick={e=> setValue(value + e.target.value)}>4</button>
                <button className="first-btnO"  value='*' onClick={e=> setValue(value + e.target.value)}>*</button>
            </div>
        
               <div>
               <button className="first-btn"  value='3'onClick={e=> setValue(value + e.target.value)}>3</button>
                <button className="first-btn"  value='2' onClick={e=> setValue(value + e.target.value)}>2</button>
                <button className="first-btn"  value='1'onClick={e=> setValue(value + e.target.value)}>1</button>
                <button className="first-btnO"  value='-' onClick={e=> setValue(value + e.target.value)}>-</button>
            </div>
            <div>
                <button className="first-btn" value='0' onClick={e=>setValue(value +e.target.value )}>0</button>
                 <button className="first-btnO"  value='.' onClick={e=> setValue(value + e.target.value)}>.</button>
               <button className="first-btnO"  value='/'onClick={e=> setValue(value + e.target.value)}>/</button>
                <button className="first-equal" value='=' onClick={(e)=>{setValue(eval(value))}}>=</button>
                
            </div>
            </div>
        
        
    </div>
    
}