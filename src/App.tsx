import { Route, Routes } from 'react-router-dom'
import './App.css'
import Welcome from './pages/welcome'
import SignUp from './pages/signup'
import Login from './pages/login'
import NotFound from './pages/notfound'
import Home from './pages/home'

function App() {
  return (
    <div className="w-full h-dvh">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
