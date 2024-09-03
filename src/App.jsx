import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/layout/Navbar";
import WrapperContainer from "./components/common/WrapperContaner";
import Footer from "./components/layout/Footer";
import NotFound from "./pages/NotFoundPage";
import AddRecipe from "./pages/Add-recipe/AddRecipe";
import Signup from "./pages/Signup/Signup";
import { Recipe } from "./pages/recipe/Recipe";
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
          <Route path="/signup" element={<Signup />} />
          <Route path="/recipe/:recipeName" element={<Recipe />} />
          <Route path="*" element={<NotFound/>}/>

        </Routes>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
