import { Routes, Route } from 'react-router';
import './App.css'
import Home from './pages/Home';
import Counter from './pages/Counter';
import AdventureParty from './pages/AdventureParty';

function App() {


  return (
    <>
    <h1>This is my notes for useReducer</h1>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/adventure' element={<AdventureParty/>}/>
      </Routes>
    </>
  )
}

export default App
