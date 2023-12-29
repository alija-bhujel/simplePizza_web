// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from "./pages/About";
import Contact from "./pages/Contact";

import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
    <Routes>
    <Route index element={<Home/>}/>
    <Route exact path="/shop" element={<Shop/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
