import { useState } from "react"


export default function Calculator() {
const [value,setValue]=useState('');
const [diff,setDiff]=useState('');
return<div className="first">
        <form action=''>
            <div className="second">
            <div className="display">
            <input type="text" value={value} onChange={value}/>
            </div>
            <div>
                <input className="first-btn" type="button" value="AC" onClick={e=>setValue('')} />
                <input className="first-btn" type="button" value="DE" onClick={e=> setValue(value.slice(0,-1))}/>
                <input className="first-btn" type="button" value='+'onClick={e=> setValue(value + e.target.value)}/>
                <input className="first-btn" type="button" value='.' onClick={e=> setValue(value + e.target.value)}/>
                
            </div>
               <div>
                <input className="first-btn" type="button" value='9' onClick={e=> setValue(value + e.target.value)}/>
                <input className="first-btn" type="button" value='8' onClick={e=> setValue(value + e.target.value)}/>
                <input className="first-btn" type="button" value='7' onClick={e=> setValue(value + e.target.value)}/>
                <input className="first-btn" type="button" value='-' onClick={e=> setValue(value + e.target.value)}/>
                
            </div>
               <div>
                <input className="first-btn" type="button" value= '6' onClick={e=> setValue(value + e.target.value)}/>
                <input className="first-btn" type="button" value='5'onClick={e=> setValue(value + e.target.value)}/>
                <input className="first-btn" type="button" value='4' onClick={e=> setValue(value + e.target.value)}/>
                <input className="first-btn" type="button" value='*' onClick={e=> setValue(value + e.target.value)}/>
                
            </div>
               <div>
                <input className="first-btn" type="button" value='3' onClick={e=> setValue(value + e.target.value)}/>
                <input className="first-btn" type="button" value='2' onClick={e=> setValue(value + e.target.value)}/>
                <input className="first-btn" type="button" value='1' onClick={e=> setValue(value + e.target.value)}/>
                <input className="first-btn" type="button" value='/' onClick={e=> setValue(value + e.target.value)}/>
            </div>
            <div>
                   <input className="first-btn" type="button" value='0' onClick={e=> setValue(value + e.target.value)}/>
                   <input className="first-equal" type="button" value='=' onClick={e=> setValue(eval(value))}/>
            </div>
            </div>
        </form>
        {/* <div className="secondCal">
            <form>
                <div className="secondCal1">
                    
                    <div className="secondCalDis">
                     <input type="text" value={value} onChange={diff}/>
                    </div>
                    <div className="secondCalDisR">
                        <label>Result</label>
                        <input />
                    </div>
                    <div>
                        <input  className="second-btn" type="button" value='0' onClick={e=>setDiff(diff + e.target.diff)} />
                        <input  className="second-btn" type="button" value='1' />
                        <input  className="second-btn" type="button" value='2' />
                        <input  className="second-btn" type="button" value='3' />
                    </div>
                    <div>
                        <input  className="second-btn" type="button" value='4' />
                        <input  className="second-btn" type="button" value='5' />
                        <input  className="second-btn" type="button" value='6' />
                        <input  className="second-btn" type="button" value='7' />
                    </div>
                    <div>
                        <input  className="second-btn" type="button" value='8' />
                        <input  className="second-btn" type="button" value='9' />
                        <input  className="second-btn" type="button" value='+' />
                        <input  className="second-btn" type="button" value='-' />
                    </div>
                    <div>
                        <input  className="second-btn" type="button" value='/' />
                        <input  className="second-btn" type="button" value='*' />
                        <input  className="second-btn" type="button" value='=' />
                    </div>
                    <div>
                     <input  className="second-btnac" type="button" value='AC' />
                    </div>
                </div>

            </form>
        </div> */}
    </div>
    
}