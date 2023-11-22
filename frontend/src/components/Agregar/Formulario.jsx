import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from "./Formulario.module.css";

const Formulario = () => {
  const [datos, setDatos] = useState({ nombre: '', correo: '', telefono:'' });
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (datos.nombre && datos.correo) {
      try {        
        const existeUsuario = usuarios.find((usuario) => usuario.nombre === datos.nombre);
        if (existeUsuario) {
          await axios.put(`http://localhost:4567/editar`, datos);
        } else {
          await axios.post('http://localhost:4567/agregar', datos);
        }        
        obtenerUsuarios();        
        setDatos({ nombre: '', correo: '', telefono: '' });
      } catch (error) {
        console.error('Error al enviar los datos al servidor:', error);
      }
    } else {
      console.warn('Completa todos los campos del formulario.');
    }
  };

  const handleEliminar = async (usuario) => {
    try {      
      await axios.delete(`http://localhost:4567/eliminar`, {params: usuario});
      obtenerUsuarios();
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
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
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={datos.nombre}
            onChange={handleChange}
            className={style.formularioTxt}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="correo"
            value={datos.correo}
            onChange={handleChange}
            className={style.formularioTxt}
          />
        </label>

        <label>
          Teléfono:
          <input
            type="text"
            name="telefono"
            value={datos.telefono}  
            onChange={handleChange}
            className={style.formularioTxt}
          />
        </label>


        <button type="submit" className={style.formularioBtn}>Guardar</button>
      </form>

      <ul className={style.lista}>        
        {usuarios.map((usuario) => (
          <li className={style.listaItem} key={usuario.nombre}>
            <p>{usuario.nombre} <br /> {usuario.correo} <br /> {usuario.telefono} </p>
            <button className={style.btnItem} onClick={() => handleEliminar(usuario)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>

    </div>
  );


};

export default Formulario;
