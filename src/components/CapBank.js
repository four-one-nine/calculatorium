import React, {useState, useEffect} from 'react'
import {validateNum} from '../App';

function CapBank() {
    const [okv, setOKV] = useState(223.4);
    const [tkv, setTKV] = useState(230);
    const [omva, setOMVA] = useState(303.2);
    const [result, setResult] = useState(451.3);

    //Forces the update of the DOM items any time the state changes
    useEffect(() => {    updateResult();  });

    //Updates the result based on the current values or variables
    function updateResult(state) {
        var myResult = parseFloat(okv * 2).toFixed(2);
        setResult(myResult);
    }

    //Updates variable OKV
    function updateOKV(e) {
        validateNum(okv,e)
        setOKV(e.target.value);
    }

    //Updates variable TKV
    function updateTKV(e) {
        validateNum(tkv,e)
        setTKV(e.target.value);
    }

    //Updates variable TKV
    function updateOMVA(e) {
        validateNum(omva,e)
        setOMVA(e.target.value);
    }

  return (
      <div className='container p-5'>
        <h1>Cap Bank MVA</h1>
        <form>
        <div className='row py-2'>
            <div className='col'>
                <label htmlFor="tkvInput" className="form-label">Target Voltage (in KV)</label> 
                <input type='text' className='form-control form-cotnrol-lg' name='tkv' placeholder='230' onChange={updateTKV}></input>
            </div>
            <div className='col'>
                <label htmlFor="okvInput" className="form-label">Operating Voltage (in KV)</label> 
                <input type='text' className='form-control form-cotnrol-lg' name='okv' placeholder='223.4' onChange={updateOKV}></input>
            </div>
            <div className='col'>
                <label htmlFor="omvaInput" className="form-label">Operative MVA</label> 
                <input type='text' className='form-control form-cotnrol-lg' name='omva' placeholder='303.2' onChange={updateOMVA}></input>
            </div>
            <div className='col'>
                <h5>Target MVA</h5>
                <h1>{result}</h1>
            </div>
        </div>
        </form>
      </div>
  )
}

export default CapBank