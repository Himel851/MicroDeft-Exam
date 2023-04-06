import "./App.css";
import ProductDetails from "./components/details/ProductDetails";
import Main from "./components/main/Main";
import NavbarPage from "./components/navbar/NavbarPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <NavbarPage />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
