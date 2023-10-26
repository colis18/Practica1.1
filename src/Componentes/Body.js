import React from "react";
import './Body.css';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
function Body(){
  const mostrarAlerta = () => {
    alert('¡Hiciste clic en el botón!');
  }
       
         const canciones = [
    { id: 1, nombre: "Colgando en tus manos", artista: "Carlos Baute y Marta Sanchez", Album: "De mi puno y letra" },
    {id:2, nombre: "Beat It ", artista :"Michael Jackson", Album:"Thriller "},
    {id:3, nombre: "Ojos asi ", artista :"Shakira", Album:"¿Dónde están los ladrones? "},
    {id:4, nombre: "No me ensenaste ", artista :"Thalia", Album:"Thalia? "},
    {id:5, nombre: "La calle de las Sirenas ", artista :"Kabah", Album:"La calle de las Sirenas "}
   
   
    // Puedes agregar más canciones aquí si es necesario
  ];

  return (
    <div>
      <h1>Canciones</h1>
      <ul>
        {canciones.map((cancion) => (
          <li key={cancion.id}>
            <strong>Nombre:</strong> {cancion.nombre} <br />
            <strong>Artista:</strong> {cancion.artista} <br />
            <strong>Álbum:</strong> {cancion.Album} <br />
          </li>
        ))}
      </ul>
      <Button onClick={mostrarAlerta}>Sucesoooo</Button>
    </div>
  );
 
 

    
}

export default Body;


Body.propTypes={
    texto:  PropTypes.string,
    arreglo: PropTypes.array,
};
