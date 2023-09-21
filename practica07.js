crearFormulario();

function crearFormulario(){        
    
    const formulario = document.getElementById("formulario")    

    const fieldset = createFieldset("Información Personal");
    fieldset.appendChild(createLabel("Nombre: "));
    fieldset.appendChild(createInput("text", "txNombre"));
    fieldset.appendChild(createLabel("Email: "));
    fieldset.appendChild(createInput("email", "txEmail"));

    const fieldsetDir = createFieldset("Información de Dirección");    
    fieldsetDir.appendChild(createLabel("Dirección: "));
    fieldsetDir.appendChild(createInput("text", "txDireccion"));
    fieldsetDir.appendChild(createLabel("Ciudad:"));
    fieldsetDir.appendChild(createInput("text", "txCiudad"));    

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
