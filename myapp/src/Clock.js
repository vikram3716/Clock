import React,{useRef,useEffect, useState} from 'react'
import './Clock.css';
const Clock = () => {
const [set,setstate]=useState(0);
const [set2,setstate2]=useState(0);
const [set3,setstate3]=useState(0);
    const node=useRef(null);
useEffect(()=>{
setInterval(fn,1000)

},[])
const fn=()=>{
 let date=new Date();
let h=date.getHours();
let m=date.getMinutes();
let s=date.getSeconds();


let hR=30*h+m/2;
let mR=6*m;
let sR=6*s;
setstate(hR);
setstate2(mR);
setstate3(sR);
}
    
  return (
    <div id="container">
     <div id='clock'>
     <div className="stick" id='hour' style={{transform:`rotate(${set}deg)`} } ><i style={{height:"100px",backgroundColor:"red",width:"7px"}}></i></div>
     <div className="stick" id='min'  style={{transform:`rotate(${set2}deg)`}}><i style={{height:"130px",backgroundColor:"green",width:"4px"}}></i></div>
     <div className="stick" id='sec'  style={{transform:`rotate(${set3}deg)`}}><i style={{height:"150px",backgroundColor:"yellow" ,width:"3px"}}></i></div>
<span id='A1'><b id="btag1">1</b></span>
<span id='A2'><b id="btag2">2</b></span>
<span id='A3'><b id="btag3">3</b></span>
<span id='A4'><b id="btag4">4</b></span>
<span id='A5'><b id="btag5">5</b></span>
<span id='A6'><b id="btag6">6</b></span>
<span id='A7'><b id="btag7">7</b></span>
<span id='A8'><b id="btag8">8</b></span>
<span id='A9'><b id="btag9">9</b></span>
<span id='A10'><b id="btag10">10</b></span>
<span id='A11'><b id="btag11">11</b></span>
<span id='A12'><b id="btag12">12</b></span>
     </div>
    </div>
  )
}

export default Clock
