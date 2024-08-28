
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddWidget from './components/AddWidget';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import SearchWidget from './components/SearchWidget';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="" element={<Dashboard/>}></Route>
        <Route path="/Search"   element={<SearchWidget/>}></Route>
        <Route path="/add" element={<AddWidget/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
