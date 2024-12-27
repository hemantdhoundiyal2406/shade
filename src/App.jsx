import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact/Contact';
import Navbar from './assets/components/Navbar/Navbar';
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      
      <Router>

        <Navbar />
        
    
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact />} />
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;
