import React, { useState, useEffect } from 'react'
import {validateNum} from '../App';

function SOTF() {
    const [twoSevenP, setTwoSevenP] = useState(40);
    const [volts, setVolts] = useState(230);
    const [ptr, setPtr] = useState(2000);
    const [result, setResult] = useState(1);

    //Forces the update of the DOM any time changes are detected
    useEffect(() => {    updateResult();  });

    //Updats the results based on the current values of the variables
    function updateResult(state) {
        var vln = (volts*1000)/(Math.sqrt(3));
        var vsec = vln/ptr;
        var myResult = parseFloat((twoSevenP/vsec*100)).toFixed(2);
        setResult(result => myResult);
    }

    //Updates 27P1P
    function update27P1P(e) {
        validateNum(twoSevenP,e)
        setTwoSevenP(twoSevenP => e.target.value);
    }
    
    //Updates Voltage
    function updateVolts(e) {
        validateNum(volts,e)
        setVolts(volts => e.target.value);
    }

    //Updates PTR
    function updatePtr(e) {
        validateNum(ptr,e)
        setPtr(ptr => e.target.value);
    }

  return (
    <div className='container p-5'>
        <h1>SOTF</h1>
        <form>
            <div className='row py-2'>
                <div className='col'>
                    <label htmlFor="27P1PInput" className="form-label">27P1P</label> 
                    <input type='text' className='form-control form-cotnrol-lg' name='27p' placeholder='40' onChange={update27P1P}></input>
                </div>
            </div>
            <div className='row py-2'>
                <div className='col'>
                    <label htmlFor="VoltInput" className="form-label">Voltage (in KV)</label> 
                    <input type='text' className='form-control form-cotnrol-lg' name='volts' placeholder='230' onChange={updateVolts}></input>
                </div>
            </div>
            <div className='row py-2'>
                <div className='col'>
                    <label htmlFor="PTRInput" className="form-label">PTR</label> 
                    <input type='text' className='form-control form-cotnrol-lg' name='ptr' placeholder='2000' onChange={updatePtr}></input>
                </div>
            </div>
        </form>
        <div className=''>
            <div className='row py-5'> 
                <div className='col'>
                    <div className='border bg-light p-1'>
                        <h1>{result}%</h1>
                    </div>
                </div>
            </div>  
        </div>
    </div> 
  )
}

export default SOTF

