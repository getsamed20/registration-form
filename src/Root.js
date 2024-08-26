import Signup from './App.js'
import Login from './logIn.js'
import { BrowserRouter, Routes, Route } from "react-router-dom"
export default function App(){
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Signup/> } />
        <Route path="logIn" element={ <Login/> } />
      </Routes>
      </BrowserRouter>
  )
}