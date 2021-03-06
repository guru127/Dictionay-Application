import { Container } from '@material-ui/core';
import axios from 'axios';
import { useEffect,useState } from 'react';
import './App.css';
import{BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from './components/header/Home';
import Cards from './components/cards/Cards';
import Footer from './components/footer/Footer';

function App() {
   return (
    <div className="App" >
       <Container className="conatiner" maxWidth="md">
        <Home/>
        <Footer/>
       </Container>
    </div>
  );
}

export default App;
