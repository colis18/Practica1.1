import React, { Component } from "react";
import './Header.css'
import music from '../music.png'
class Header extends Component{
    render(){
        return(
        <div className="Header">
        <img src={music} className="App-music" alt="music"/>
        
        </div>
        );
    }
}

export default Header;