import React from 'react';
import './App.css';
import Home from "./components/pages/home";
import NavBar from "./components/pieces/navbar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
