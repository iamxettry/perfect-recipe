import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import AboutUs from './pages/About/AboutUs';
function App() {
  return (
    <>
     <Router>
      <Routes>
         <Route exact path='/' element={<Home/>} />
         <Route path='about' element={<AboutUs/>} />
      </Routes>

     </Router>

    </>
  )
}

export default App
