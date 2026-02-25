import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';

// Make sure it says "export default"
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-[#0c0c12] transition-colors">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}