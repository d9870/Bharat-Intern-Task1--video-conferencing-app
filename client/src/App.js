import {Routes, Route } from 'react-router-dom'
import LobbyScreen from './Pages/Home'
import './App.css'
import RoomPage from './Pages/Room'

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LobbyScreen />} />
        <Route path='/room/:id' element={<RoomPage/>} />
      </Routes>
    </div>
  )
}
