import MiFieldSet from "./MiFieldSet";

function Formulario() {
  return (    
      <form>
        <MiFieldSet titulo="Datos Personales" txt1="Nombre" txt2="Password" />
        <MiFieldSet titulo="Datos Personales" txt1="Dirección" txt2="Correo" />
        <input type="submit" value="Enviar datos" />
      </form>    
  );
}

export default Formulario;
