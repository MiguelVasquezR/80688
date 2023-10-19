import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import './index.css'
// import MiFieldSet from "./MiFieldSet";
import Formulario from "./Formulario.jsx";
import DatosPersonales from "./DatosPersonales.jsx";
import DatosEscolares from "./DatosEscolares.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <form action="">
      <MiFieldSet titulo="Datos Personales" txt1="Nombre" txt2="Password" />
      <MiFieldSet titulo="Datos Personales" txt1="Dirección" txt2="Correo" />
      <input type="submit" value="Enviar datos" />
    </form> */}
    
    <DatosPersonales></DatosPersonales>
    <DatosEscolares></DatosEscolares>
    <Formulario></Formulario>


  </React.StrictMode>
);
