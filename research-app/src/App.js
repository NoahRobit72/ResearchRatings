import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import LabReviews from './pages/LabReviews';
import LabsBU from "./pages/LabPages/LabsBU"
import LabsMIT from "./pages/LabPages/LabsMIT"
import LabsNU from './pages/LabPages/LabsNU';
import { LoginPage } from './pages/LoginPages/LoginPage';
import HomeLoggedIn from './pages/HomeLoggedIn';
import { InputSubmission } from './pages/InputSubmission';
import { SignupPage } from './pages/LoginPages/SignupPage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<HomeLoggedIn/>} />
        <Route path="/LabsBU" element={<LabsBU />} />
        <Route path="/LabsMIT" element={<LabsMIT />} />
        <Route path="/LabsNU" element={<LabsNU />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/LabsBU/:id" element={<LabReviews/>} />
        <Route path="/ReviewInput/:id" element={<InputSubmission/>} />
        <Route path="/signup" element={<SignupPage/>} />

      </Routes>
    </BrowserRouter>
  )
}



export default App;
