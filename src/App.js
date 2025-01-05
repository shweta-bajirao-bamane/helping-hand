import logo from './logo.svg';
import './App.css';
import Hero from './Component/Hero';
import EventSection from './Component/EventSection';
import Gallery from './Component/Gallery';
import Card from './Component/Card';
import CauseSection from './Component/CauseSection';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './Component/Contact';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero/>}></Route>
        <Route path="/events" element={<EventSection/>}></Route>
        <Route path="/" element={<Card/>}></Route>
        <Route path="/causes" element={<CauseSection/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        
        

      </Routes>
      <Footer/>
     </Router>
      
    </div>
  );
}

export default App;
