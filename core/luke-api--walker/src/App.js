import { Routes, Route } from 'react-router-dom';
import './App.css';
import People from './components/People';
import Form from './components/Form';
import Planets from './components/Planets';

function App() {
  return (
    <div className="App">
      <h1>Star Wars</h1>
      <Form />
      <Routes>
        <Route path='/' element={<h1>Welcome to the Darkside</h1>}/>
        <Route path='/people/:inputId' element={<People />}/>
        <Route path='/planets/:inputId' element={<Planets />}/>

      </Routes>
    </div>
  );
}

export default App;
