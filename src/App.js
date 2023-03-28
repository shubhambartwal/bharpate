import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from "./screens/Signup";
import { CartProvider } from "./components/ContextReducer";
function App() {
  return (
    <CartProvider> 
    <Router>
    <div>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/createuser" element={<Signup />} />
    </Routes>
    </div>
    </Router>
    </CartProvider> 
  );
}

export default App;
