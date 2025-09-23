
import Navbar from './components/Navbar';
import { Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
