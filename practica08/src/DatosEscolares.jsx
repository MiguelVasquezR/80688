
function DatosEscolares() {
    return(
        <>
            <fieldset>
                <legend>Datos Escolares</legend>
                <label htmlFor="carrera">Carrera: </label>
                <input type="text" id="carrera"/>
                <label htmlFor="semestre">Semestre: </label>
                <input type="text" id="senestre"/>
                <label htmlFor="matricula">Matricula: </label>
                <input type="text" id="matricula"/>
                <label htmlFor="facultad">Facultad: </label>
                <input type="text" id="facultad"/>
            </fieldset>
        
        </>
    )    
}

export default DatosEscolares;