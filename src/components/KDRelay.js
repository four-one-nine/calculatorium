import React, {useState, useEffect} from 'react'
import {validateNum} from '../App';

function KDRelay() {
    const [t, setT] = useState(1);
    const [s, setS] = useState(1);
    const [mta, setMTA] = useState(75);
    const [m, setM] = useState(0.12);
    const [result, setResult] = useState(0.00);
    const [result2, setResult2] = useState(0.00);

    //Forces the update of the DOM items any time the state changes
    useEffect(() => {    updateResult();  });

    //Updates the result based on the current values or variables
    function updateResult(state) {
        var nom = t*s*Math.sin(mta);
        var denom1 = (1-m)*Math.sin(75);
        var denom2 = (1+m)*Math.sin(75);
        var myResult1 = parseFloat(nom/denom1).toFixed(2);
        var myResult2 = parseFloat(nom/denom2).toFixed(2);
        setResult(myResult1);
        setResult2(myResult2);
    }

    //Updates variable T
    function updateT(e) {
        validateNum(t,e)
        setT(e.target.value);
    }

    //Updates variable S
    function updateS(e) {
        validateNum(s,e)
        setS(t => e.target.value);
    }

    //Updates variable MTA
    function updateMTA(e) {
        validateNum(mta,e)
        setMTA(mta => e.target.value);
    }

    //Updates variable M
    function updateM(e) {
        validateNum(m,e)
        setM(m => e.target.value);
    }

  return (
    <div className='container p-5'>
    <h1>KD-4/10/11/41</h1>
    <form>
        <div className='row py-2'>
            <div className='col'>
                <label htmlFor="TInpit" className="form-label">T</label> 
                <input type='text' className='form-control form-cotnrol-lg' name='T' placeholder='1' onChange={updateT}></input>
            </div>
            <div className='col'>
                <label htmlFor="SInput" className="form-label">S</label> 
                <input type='text' className='form-control form-cotnrol-lg' name='S' placeholder='1' onChange={updateS}></input>
            </div>
        </div>
        <div className='row py-2'>
            <div className='col'>
                <label htmlFor="MTAInput" className="form-label">MTA</label> 
                <input type='text' className='form-control form-cotnrol-lg' name='MTA' placeholder='75' onChange={updateMTA}></input>
            </div>
            <div className='col'>
                <label htmlFor="MInput" className="form-label">M</label> 
                <input type='text' className='form-control form-cotnrol-lg' name='M' placeholder='0.12' onChange={updateM}></input>        
            </div> 
        </div>
    </form>
    <div className=''>
        <div className='row py-5'> 
            <div className='col'>
                <div className='border bg-light p-1'>
                    <h5>Using (1-M)</h5>
                    <h1>{result}</h1>
                </div>
            </div>
            <div className='col'>
                <div className='border bg-light p-1'>
                    <h5>Using (1+M)</h5>
                    <h1>{result2}</h1>
                </div>
            </div>
        </div>  
    </div>
    </div>
)
}

export default KDRelay