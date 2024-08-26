
import { useState } from 'react'
import {  TextField , Stack ,Button } from '@mui/material'
import './App.css'
TextField
function App() {

  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [interest,setInsterest] = useState(0) 

  const [isPrincipleInvalid , setIsPricipleInvalid] = useState(false)
  const [isRateInvalid , setIsRateInvalid] = useState(false)
  const [isYearInvalid , setIsYearInvalid] = useState(false)
 
  // input validation function 
  const validateInput = (inputTag)=>{
 //object destructuring , const {key1,key2......} = object - name
 const {name,value} = inputTag
 console.log(name,value);
 console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
 console.log(!!value.match(/^\d*\.?\d+$/));
 if(name=="principle"){
  setPrinciple(value)
  !!value.match(/^\d*\.?\d+$/) ? setIsPricipleInvalid(false) : setIsPricipleInvalid(true)
}
if(name=="rate"){
  setRate(value)
  !!value.match(/^\d*\.?\d+$/) ? setIsRateInvalid(false) : setIsRateInvalid(true)
}
if(name=="year"){
  setYear(value)
  !!value.match(/^\d*\.?\d+$/) ? setIsYearInvalid(false) : setIsYearInvalid(true)
}
 
  }
  // to avoid unnecesory refreshing of webpaage
 const handleCalculate = (e)=>{
  e.preventDefault()
  console.log("inside handleCalculate function");
  if(principle && rate && year){
    //calculate
    setInsterest(principle*rate*year/100)
  }else{
    alert("Fill the Form completely")
  }
  
 }
 const resetCalculate = ()=>{
   setPrinciple(0)
   setRate(0)
   setYear(0)
   setInsterest(0)
   setIsPricipleInvalid(false)
   setIsRateInvalid(false)
   setIsYearInvalid(false)
 }
  return (
    <div style={{minHeight:'100vh' , width:'100%'}} className='d-flex justify-content-center align-items-center bg-dark'>
       <div style={{width:'600px'}} className='bg-light rounded p-5'> 
             <h3>Simple interest Calculator </h3>
             <p>calculate your simple interest Easily</p>
           <div className='d-flex flex-column text-light justify-content-center align-items-center bg-warning shadow p-3 rounded'> 
            <h1>₹ {interest}</h1>
            <p>Total Simple Interest</p>
           </div>
           <form className="mt-5">
            <div className="mb-3 ">
              <TextField value={principle || ""} onChange={e=>validateInput(e.target)} name='principle' className='w-100' id="outlined-basic" label="Principle Amount" variant="outlined" />
            </div>
            { 
              isPrincipleInvalid &&
              <div className="mb-3 text-danger fw-bolder">Invalid Principle Amount</div>
            }
           
            <div className="mb-3 ">
              <TextField value={rate || ""}  onChange={e=>validateInput(e.target)} name='rate' className='w-100' id="outlined-basic1" label="Rate of interest(p.a) %" variant="outlined" />
            </div>
            {
              isRateInvalid &&
              <div className="mb-3 text-danger fw-bolder">Invalid Rate</div>
            }
            <div className="mb-3 ">
              <TextField value={year || ""} onChange={e=>validateInput(e.target)} name='year' className='w-100' id="outlined-basic2" label="Time Period (Yr)" variant="outlined" />
            </div>
            {
              isYearInvalid &&
              <div className="mb-3 text-danger fw-bolder">Invalid year </div>
            }
            <Stack direction="row" spacing={2}>     
            <Button disabled={isPrincipleInvalid || isRateInvalid || isYearInvalid} type='submit' onClick={handleCalculate} 
            style={{width:'50% ',height:'70px'}} className='bg-dark' variant="contained">Calculate</Button>
            <Button onClick={resetCalculate} style={{width:'50% ',height:'70px'}} variant="outlined">Reset</Button>
            </Stack>
           </form>
        </div>
    </div>
  )
}

export default App
