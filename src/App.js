
import './App.css';
import Header from './components/Header';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import Partite from './components/Partite/ListaPartite';
import ShowTeam from './components/Teams/ShowTeam';
import ListTeams from './components/Teams/ListTeams';
import Home from './components/Home/Home';

function App() {
  const location = useLocation();


  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/squadre" element={<ListTeams />} />
        <Route path="/team/:id" element={<ShowTeam />} />
        <Route path="/partite" element={<Partite />} />
      </Routes>
    </React.Fragment>

  );
}

export default App;
