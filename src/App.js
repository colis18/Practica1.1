import React from 'react';
import logo from './logo.svg';
import music from './music.png';
import './App.css';
import Header from './Componentes/Header';
import Banner from './Componentes/Banner';
import Body from './Componentes/Body';
import Footer from './Componentes/Footer';
import PropTypes from 'prop-types';
import { Button } from 'bootstrap';

class App extends React.Component{
 render(){
  return (
    <div className="App">
      <Banner/>
      <Header/>
      <Banner/>
      
      <Body/>
    
      
      <Footer>
        {<h1>Copyrigth &copy; Todos los derechos Reservados</h1>}
      </Footer>
      
      
    </div>
  );
}}

export default App;
