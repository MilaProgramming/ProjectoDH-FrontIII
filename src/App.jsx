import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BossDetail from './pages/BossDetail';
import ContactForm from './pages/ContactForm';
import Navbar from './components/Navbar';
import ThankYou from './components/ThankYou';
import './App.css'

function App() {

  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bosses/:id" element={<BossDetail />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/contact" element={<ContactForm />} />
        </Routes>
    </div>
);
}

export default App
