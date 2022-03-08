import React, {useState, useEffect} from 'react'
import {validateNum} from '../App';

function PriSec() {
    const [volts, setVolts] = useState(230);
    const [ctr, setCtr] = useState(240);
    const [pOhms, setPOhms] = useState(13.1);
    const [sOhms, setSOhms] = useState(1.2);
    const [result, setResult] = useState(1);
    const [isInPri, setIsInPri] = useState(true);

    //Forces the update of the DOM any time changes are detected
    useEffect(() => {    updateResult();  });

    //Updats the results based on the current values of the variables
    function updateResult(state) {
        var pt = (volts*1000)/115;

        if(isInPri) {
            var tempSOhms = pOhms * (ctr/pt);
            var myResult = parseFloat(tempSOhms).toFixed(2);
            var form = document.getElementById('secSettings');
            form.value = myResult;
            setResult(result => myResult);
        } else {
            var tempPOhms = sOhms / (ctr/pt);
            var myResult = parseFloat(tempPOhms).toFixed(2);
            var form = document.getElementById('priSettings');
            form.value = myResult;
            setResult(result => myResult);
        }
        
    }

    //Updates volts
    function updateVolts(e) {
        validateNum(volts,e)
        setVolts(volts => e.target.value);
    }

    //Updates Ptr
    function updateCtr(e) {
        validateNum(ctr,e)
        setCtr(ctr => e.target.value);
    }

    //Updates Primary Ohms
    function updatePOhms(e) {
        validateNum(pOhms,e)
        setPOhms(pOhms => e.target.value);
        setIsInPri(true);
    }
    //Updates Secondary Ohms
    function updateSOhms(e) {
        validateNum(sOhms,e)
        setSOhms(sOhms => e.target.value);
        setIsInPri(false);
    }





  return (
    <div className='container p-5'>
        <h1>Primary/Secondary</h1>
        <form>
            <div className='row py-2'>
                <div className='col'>
                    <label htmlFor="VoltageInput" className="form-label">Voltage (in KV)</label> 
                    <input type='text' className='form-control form-cotnrol-lg' name='volts' placeholder='230' onChange={updateVolts}></input>
                </div>
                <div className='col'>
                    <label htmlFor="PTRInput" className="form-label">CTR:1</label> 
                    <input type='text' className='form-control form-cotnrol-lg' name='ptr' placeholder='240' onChange={updateCtr}></input>
                </div>
            </div>
            <div className='row py-2'>
                <div className='col'>
                    <label htmlFor="SecInput" className="form-label">Setting (in Primary)</label> 
                    <input type='text' className='form-control form-cotnrol-lg' id='priSettings' placeholder='13.1' onChange={updatePOhms}></input>
                </div>
            </div>
            <div className='row py-2'>
                <div className='col'>
                    <label htmlFor="PriInput" className="form-label">Setting (in Secondary)</label> 
                    <input type='text' className='form-control form-cotnrol-lg' id='secSettings' placeholder='1.6' onChange={updateSOhms}></input>
                </div>
            </div>
        </form>
        <div className=''>
            <div className='row py-5'> 
                <div className='col'>
                    <div className='border bg-light p-1'>
                        <h3>{isInPri ? 'In Secondary' : 'In Primary'}</h3>
                        <h1>{result}</h1>
                    </div>
                </div>
            </div>  
        </div>
    </div> 
  )
}

export default PriSec
