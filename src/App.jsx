import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PlanIt from './pages/PlanIt';
import WanderAI from './pages/WanderAI';
import Sukoon from './pages/Sukoon';
import './index.css';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/plan-it" element={<PlanIt />} />
        <Route path="/project/wander-ai" element={<WanderAI />} />
        <Route path="/project/sukoon" element={<Sukoon />} />
      </Routes>
    </Router>
  );
}

export default App;