import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Layout from './src/organisms/layout/Layout';
import Home from './src/pages/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>

          {/* Conins the main component */}
          <Route index element={<Home />}></Route>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
