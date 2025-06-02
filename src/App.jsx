import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import LandingPage from './Components/LandingPage/LandingPage';
import Popular from './Components/Popular/Popular.jsx'
import Quiz from './Components/Quiz/Quiz.jsx';

const App = () => {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
