import { Box, TextField } from "@mui/material"
import "./Formulario.css";
import { useState } from "react";

function Formulario() {
    const [datosFormulario, setDatosFormulario] = useState({nombre: "", correo:""});
    const [btnBloqueo, setBtnBloqueo] = useState(false);

    const getInformation = async (e) => {
        e.preventDefault();
        setBtnBloqueo(true);
        try{
            console.log("Se ha hecho la petición");            
        }catch(error){
            console.log("Hay un error en la obtención de datos");
            setBtnBloqueo(false);
        }
    }
    
    const doPetition = async (e) =>{
        try {
            const res = await axios.get("http://localhost:4567/", {params: datosFormulario});
            console.log(res.data);
            return res.data;
          } catch (error) {
            throw error;
          }
    }

    let margin = 2;
    return (
        <>
            <div className="cont">
                <h2>Ingresa tus datos</h2>
                <form onSubmit={getInformation}>
                    <Box m={margin}>
                        <TextField label="Nombre" variant="outlined" type="text" fullWidth></TextField>
                    </Box>
                    <Box m={margin}>
                        <TextField label="Correo" variant="outlined" type="email" fullWidth></TextField>
                    </Box>
                    <Box m={margin}>
                        <TextField color="primary" variant="outlined" type="submit" value={"Registrar"} fullWidth></TextField>
                    </Box>
                </form>
            </div>
        </>
    );
}

export default Formulario;