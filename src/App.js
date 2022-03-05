import './App.css';

import KDRelay from './components/KDRelay';
import OOSB from './components/OOSB';
import PriSec from './components/PriSec';
import SOTF from './components/SOTF'
import CapBank from './components/CapBank';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className='d-flex align-items-center'>
        <div className='container-fluid'>
                <div className='row p-3'>
                  <h1>Calculatorium</h1>
                </div>
                <div className='row shadow-lg'>
                  <div className='col bg-secondary bg-opacity-10'>
                    <KDRelay/>
                  </div>
                  <div className='col bg-light'>
                    <OOSB/>
                  </div>
                  <div className='col bg-secondary bg-opacity-10'>
                    <PriSec/>
                  </div>
                  <div className='col bg-light'>
                    <SOTF/>
                  </div>
                </div>
              <div className='row shadow-lg'>
                    <CapBank/>
              </div>
        </div> 
      </div>
    </div>
  );
}

export default App;

export function validateNum(n, e) {
  if (isNaN(e.target.value)){
    e.target.value=n;
    console.log('Invalid Entry')
    return false;
  }
  else {
    return true;
  }
  
}
