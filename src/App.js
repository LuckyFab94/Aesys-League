
import './App.css';
import Header from './components/Header';
import React from 'react';
import { useEffect, useState } from 'react'
import { getMatch } from './config/action'
import { Routes, Route, useLocation } from 'react-router-dom'
import Partite from './components/Partite/ListaPartite';
import ShowTeam from './components/Teams/ShowTeam';
import ListTeams from './components/Teams/ListTeams';

function App() {
  const location = useLocation();
  //console.log(location)


  useEffect(() => {
    //getMatch()
  }, [])



  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/squadre" element={<ListTeams />} />
        <Route path="/team/:id" element={<ShowTeam />} />
        <Route path="/partite" element={<Partite />} />
      </Routes>
    </React.Fragment>

  );
}

export default App;
