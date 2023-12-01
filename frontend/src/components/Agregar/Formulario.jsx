import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from "./Formulario.module.css";

const Formulario = (props) => {
  const [datos, setDatos] = useState({nombre: '', correo: '', telefono: '', id: ''});
  const [usuarios, setUsuarios] = useState([]);
  const {bandera} = props;

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const handleChange = (e) => {
    console.log(e.target);
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (datos.nombre && datos.correo && datos.telefono){
      try {
        const existeUsuario = usuarios.find((usuario) => {if (usuario.id === datos.id) {return true}});
        
        if (existeUsuario) {
          console.log("Entreo a put");
          await axios.put(`http://localhost:4567/editar`, datos);
        } else {
          console.log("Entreo a pst");
          await axios.post('http://localhost:4567/agregar', datos);
        }

        obtenerUsuarios();
        setDatos({ id: '', nombre: '', correo: '', telefono: '' });
      } catch (error) {
        console.error('Error al enviar los datos al servidor:', error);
      }
    } else {
      console.warn('Completa todos los campos del formulario.');
    }
  };  


  const obtenerUsuarios = async () => {
    try {
      const response = await axios.get('http://localhost:4567/todos');
      setUsuarios(response.data);
    } catch (error) {
      console.error('Error al obtener la lista de usuarios:', error);
    }
  };

  return (
    <div className={style.contComponente}>
      <h1>Formulario de Usuarios</h1>
      <form onSubmit={handleSubmit} className={style.formulario}>
        {bandera === true && <label>ID: <input type="text" name="id" value={datos.id} onChange={handleChange} className={style.formularioTxt}/></label>}
        <label> Nombre:<input type="text" name="nombre" value={datos.nombre} onChange={handleChange} className={style.formularioTxt} /></label>
        <label> Email:<input type="email" name="correo" value={datos.correo} onChange={handleChange} className={style.formularioTxt} /></label>
        <label> Teléfono:<input type="text" name="telefono" value={datos.telefono} onChange={handleChange} className={style.formularioTxt} /></label>
        <button type="submit" className={style.formularioBtn}>Guardar</button>
      </form>
    </div>
  );


};

export default Formulario;
