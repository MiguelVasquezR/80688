crearFormulario();

function crearFormulario(){        
    
    const formulario = document.getElementById("formulario")    

    const fieldset = createFieldset("Información Personal");
    const labelNombre = createLabel("Nombre: ");
    const inputNombre = createInput("text", "txNombre");
    const labelEmail = createLabel("Email: ");
    const inputEmail = createInput("email", "txEmail");
    fieldset.appendChild(labelNombre);
    fieldset.appendChild(inputNombre);
    fieldset.appendChild(labelEmail);
    fieldset.appendChild(inputEmail);

    const fieldsetDir = createFieldset("Información de Dirección");
    const labelDir = createLabel("Dirección: ");
    const inputDir = createInput("text", "txDireccion");
    const labelCiudad = createLabel("Email: ");
    const inputCiudad = createInput("email", "txEmail");
    fieldsetDir.appendChild(labelDir);
    fieldsetDir.appendChild(inputDir);
    fieldsetDir.appendChild(labelCiudad);
    fieldsetDir.appendChild(inputCiudad);    

    const btnEnviar = document.createElement("input");
    btnEnviar.type = "submit";    
    btnEnviar.value = "Enviar";

    formulario.appendChild(fieldset);    
    formulario.appendChild(fieldsetDir);    
    formulario.appendChild(btnEnviar); 

}

function createFieldset(Titulo){
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = Titulo;
    fieldset.appendChild(legend);
    return fieldset;
}

function createLabel(Titulo){
    const label = document.createElement("label");
    label.textContent = Titulo;
    return label;
}

function createInput(tipo, id){
    const input = document.createElement("input");
    input.type = tipo;
    input.id = id;
    return input;
}
