import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './pages/landingPage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
