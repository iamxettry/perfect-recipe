import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/AboutUs";
import Navbar from "./Components/layout/Navbar";
import WrapperContainer from "./Components/common/WrapperContaner";
import Footer from "./Components/layout/Footer";
function App() {
  return (
    <div className="relative overflow-hidden  scroll-smooth">
      <Router>
        <WrapperContainer>
          <Navbar />
        </WrapperContainer>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
        </Routes>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
