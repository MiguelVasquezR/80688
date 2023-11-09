import React, { useInsertionEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";

function Formulario(props) {
  const [Cargando, setCargando] = useState(false);
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    password: "",
  });

  const procesarFormulario = async (e) => {
    e.preventDefault();
    console.log("Datos recuperados del formulario: ", datosFormulario);
    setCargando(true);
    try {
      const res = await hacerPeticion();
      if (datosFormulario.nombre === res.tipo_usuario) {
        console.log("Ok, el usuario es correcto");
      } else {
        console.log("Error el usuario es incorrecto");
      }
    } catch (error) {
      console.log("error: ", error);
      setCargando(false);
    }
  };

  const cambiosFormulario = (e) => {
    console.log(e.target);
    const { name, value } = e.target; //Desestructura el objeto para solo tener name y su valor
    setDatosFormulario({
      ...datosFormulario, //Desestructuración del objeto
      [name]: value,
    });
  };

  const hacerPeticion = async () => {
    try {
      const res = await axios.get("http://localhost:4567/tipo-usuario");            
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <h1>Inicio de Sesión</h1>

      <form onSubmit={procesarFormulario}>
        <Box m={5}>
          <TextField
            label="Nombre"
            variant="outlined"
            type="text"
            onChange={cambiosFormulario}
            name="nombre"
            value={datosFormulario.nombre}
            fullWidth
          ></TextField>
        </Box>

        <Box m={5}>
          <TextField
            label="Contraseña"
            variant="outlined"
            type="password"
            onChange={cambiosFormulario}
            name="password"
            value={datosFormulario.password}
            fullWidth
          ></TextField>
        </Box>

        <Box m={5}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            disabled={Cargando}
          >
            Iniciar Sesión
          </Button>
        </Box>
      </form>
    </>
  );
}

export default Formulario;
