import { Routes, Route } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Cart from './pages/Cart'
import NoPageFound from './pages/NoPageFound.jsx'
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <div className='bg-slate-900 max-[600px]:fixed w-screen'>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </div>
  );
}

export default App;
