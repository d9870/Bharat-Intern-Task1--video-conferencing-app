import {Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import './App.css'
import RoomPage from './Pages/Room'

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room/:id' element={<RoomPage/>} />
      </Routes>
    </div>
  )
}
