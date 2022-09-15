import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Main from './components/Main';
import CreateAuthor from './components/CreateAuthor';
import UpdateAuthor from './components/UpdateAuthor';

function App() {
  return (
    <div className="App">
      {/* THEATER STAGE - ROUTES */}
      <Routes>
        {/*  MAIN - ALL AUTHORS */}
        <Route path='/authors' element={<Main/>}/>
        {/* REDIRECT */}
        <Route path="*" element={<Navigate to="/authors" replace/>}/>
        {/* CREATE */}
        <Route path='/authors/new' element={<CreateAuthor/>}/>
        {/* UPDATE */}
        <Route path="/authors/update/:id" element={<UpdateAuthor/>}/>
      </Routes> 
    </div>
  )
}

export default App;
