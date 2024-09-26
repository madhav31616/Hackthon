import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TemplateSelection from './components/TemplateSelection';
import Template1 from './components/Template1';
import Template2 from './components/Template2';
import Template3 from './components/Template3';
import DragAndDrop from './components/DragAndDrop';
import Pricing from './components/Pricing';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TemplateSelection />} />
        <Route path="/template1" element={<Template1 />} />
        <Route path="/template2" element={<Template2 />} />
        <Route path="/template3" element={<Template3 />} />
        <Route path="/drag-and-drop" element={<DragAndDrop />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );

  
}


export default App;
