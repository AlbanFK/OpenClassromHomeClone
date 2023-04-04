import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login/Login'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
  
  
}

export default App;
