
import Navbar from './components/Navbar';
import { Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './routes/AppRoutes';
import Toptool from './components/Toptool';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* <AppRoutes /> */}
      <Toptool />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
