import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Main from './components/Main';
import NumOrWord from './components/NumOrWord';
import Color from './components/Color';
function App() {
  return (
    <Routes>
      <Route path="*" element={<Main/>}></Route>
      <Route path="/home" element={<Home/>}/>
      <Route path="/:input" element={<NumOrWord/>}/>
      <Route path="/:word/:wordColor/:setBackgroundColor" element={<Color/>}></Route>   
    </Routes>
  );
}

export default App;
