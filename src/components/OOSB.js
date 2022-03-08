import React, { useState, useEffect } from 'react'
import {validateNum} from '../App';

function OOSB() {

  
const [R1R6, setR1R6] = useState(3.1);
const [Z1ANG, setZ1ANG] = useState(85);
const [result, setResult] = useState(1);

    //Forces the update of the DOM any time changes are detected
    useEffect(() => {    updateResult();  });

    //Updats the results based on the current values of the variables
    function updateResult(state) {
      var B = 180-Z1ANG;
      var C = 180-30-B;
      var b = (R1R6*Math.sin(B*Math.PI/180))/Math.sin(C*Math.PI/180);
      var myResult = parseFloat((b)).toFixed(2);
      setResult(result => myResult);
    }

    //Updates Z1ANG
    function updateZ1ANG(e) {
        validateNum(Z1ANG,e)
        setZ1ANG(Z1ANG => e.target.value);
    }

    //Updates Z1ANG
    function updateR1R6(e) {
      validateNum(R1R6,e)
      setR1R6(R1R6 => e.target.value);
  }

  return (
    <div className='container p-5'>
        <h1>OOSB</h1>
        <form>
            <div className='row py-2'>
                <div className='col'>
                    <label htmlFor="Z1ANGInput" className="form-label">Z1ANG</label> 
                    <input type='text' className='form-control form-cotnrol-lg' name='Z1ANG' placeholder='85' onChange={updateZ1ANG}></input>
                </div>
            </div>
            <div className='row py-2'>
                <div className='col'>
                    <label htmlFor="R1R6Input" className="form-label">R1R6</label> 
                    <input type='text' className='form-control form-cotnrol-lg' name='R1R6' placeholder='3.1' onChange={updateR1R6}></input>
                </div>
            </div>
        </form>
        <div className=''>
            <div className='row py-5'> 
                <div className='col'>
                    <div className='border bg-light p-1'>
                        <h1>{result}</h1>
                    </div>
                </div>
            </div>  
        </div>
        <p>*SEL321 Uses Z1ANG=90</p>
    </div> 
  )
}

export default OOSB
