import React, { Component } from "react"
import './Banner.css'
import PropTypes from 'prop-types';
class Banner extends Component {
    render() {
      return (
        <div className="Banner">
          {this.props.texto1}
          {this.props.texto2}
        </div>
      );
    }
  }
  
  Banner.defaultProps = {
    texto1: "El primer mes de Spotify Premium es Gratis",
    texto2: "Escucha la nueva canción de Karol G"
  };
  
export default Banner;