
import { useState, useEffect } from "react";
import Formulario from "./Agregar/Formulario";
import styles from './Principal.module.css';
import style from './Agregar/Formulario.module.css'
import axios from 'axios';

function Principal() {
    /*
        Agregar -> true
        Editar -> false
    */
    const [datos, setDatos] = useState({ nombre: '', correo: '', telefono: '', id: '' });
    const [usuarios, setUsuarios] = useState([]);    

    useEffect(() => {
        obtenerUsuarios();
    }, []);


    const [option, setOption] = useState(false);

    const handleSelectOption = (e) => {
        if(e.target.id === "agregar"){
            setOption(true);
        }else{
            setOption(false);
        }
    }

    const obtenerUsuarios = async () => {
        try {
            const response = await axios.get('http://localhost:4567/todos');
            setUsuarios(response.data);
        } catch (error) {
            console.error('Error al obtener la lista de usuarios:', error);
        }
    };

    const handleEliminar = async (usuario) => {
        try {
            await axios.delete(`http://localhost:4567/eliminar`, { params: usuario });
            obtenerUsuarios();
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
        }
    };


    return (
        <>

            <div>
                <ul style={{ width: '400px' }}>
                    <li className={styles.li} id="agregar" key={'agregar'} onClick={handleSelectOption}>Agregar</li>
                    <li className={styles.li} key={'editar'} onClick={handleSelectOption}>Editar</li>
                </ul>
            </div>

            <div>
                {option === true && <Formulario bandera={false} />}
                {option === false && <Formulario bandera={true}/>}
            </div>

            <div>
                <ul className={style.lista}>
                    {usuarios.map((usuario) => (
                        <li className={style.listaItem} key={usuario.nombre}>
                            <p> {"ID: "+usuario.id} <br /> {"Nombre: "+ usuario.nombre} <br /> {"Correo: "+usuario.correo} <br /> 
                            {"Teléfono: "+usuario.telefono}</p>
                            <button className={style.btnItem} onClick={() => handleEliminar(usuario)}>
                                Eliminar
                            </button>                            
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}


export default Principal;