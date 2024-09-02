import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./Components/layout/Navbar";
import WrapperContainer from "./Components/common/WrapperContaner";
import Footer from "./Components/layout/Footer";
import NotFound from "./pages/NotFoundPage";
import AddRecipe from "./pages/Add-recipe/AddRecipe";
function App() {
  return (
    <div className="relative overflow-hidden  scroll-smooth">
      <Router>
        <WrapperContainer>
          <Navbar />
        </WrapperContainer>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="*" element={<NotFound/>}/>

        </Routes>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
