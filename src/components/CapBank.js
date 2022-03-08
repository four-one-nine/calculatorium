import React, {useState, useEffect} from 'react'
import {validateNum} from '../App';

function CapBank() {
    const [okv, setOKV] = useState(500);
    const [rkv, setRKV] = useState(552);
    const [rvar, setRVAR] = useState(244.8);
    const [ovar, setOVAR] = useState(0);
    const [amps, setAmps] = useState(0);

    //Forces the update of the DOM items any time the state changes
    useEffect(() => {    updateResult();  });

    //Updates the result based on the current values or variables
    function updateResult(state) {
        var tempOvar = ((okv/rkv)**2)*rvar;
        var tempAmps = (tempOvar*1000)/(okv*Math.sqrt(3));
        var myResult1 = parseFloat(tempOvar).toFixed(2);
        var myResult2 = parseFloat(tempAmps).toFixed(2);
        setOVAR(myResult1);
        setAmps(myResult2);
    }

    //Updates variable OKV
    function updateOKV(e) {
        validateNum(okv,e)
        setOKV(e.target.value);
    }

    //Updates variable RKV
    function updateRKV(e) {
        validateNum(rkv,e)
        setRKV(e.target.value);
    }

    //Updates variable RKV
    function updateRVAR(e) {
        validateNum(rvar,e)
        setRVAR(e.target.value);
    }

  return (
      <div className='container p-5'>
        <h1>Cap Bank MVA</h1>
        <form>
        <div className='row py-2'>
            <div className='col'>
                <label htmlFor="RKVInput" className="form-label">Operating Voltage (in KV)</label> 
                <input type='text' className='form-control form-cotnrol-lg' name='rkv' placeholder='230' onChange={updateOKV}></input>
            </div>
            <div className='col'>
                <label htmlFor="okvInput" className="form-label">Rated Voltage (in KV)</label> 
                <input type='text' className='form-control form-cotnrol-lg' name='okv' placeholder='223.4' onChange={updateRKV}></input>
            </div>
            <div className='col'>
                <label htmlFor="RVARInput" className="form-label">Rated MVAR</label> 
                <input type='text' className='form-control form-cotnrol-lg' name='rvar' placeholder='303.2' onChange={updateRVAR}></input>
            </div>
            <div className='col'>
                <h5>Oper. MVAR (Amps)</h5>
                <h2>{ovar} ({amps} Amps)</h2>
            </div>
        </div>
        </form>
      </div>
  )
}

export default CapBank
