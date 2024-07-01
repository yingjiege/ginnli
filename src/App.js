import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Example page component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
=======
          <Route path="/ginnli" element={<Home />} />
>>>>>>> 99fb0533cf22654ddbcae355f6fceff5e5b85478
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
