

import './App.css';
import Row from './components/Row';
import requests from '../request';

function App() {
  return (
    <div>
    <h3>Netflix</h3>
  <Row tittle={'Netflix Originals'} fetchUrl={requests.fetchNetflixOriginals}/>
    </div> 
  );
  }

export default App;
