const inputs = document.querySelectorAll("input");
inputs.forEach( input=>{
    input.addEventListener("blur", (input)=>{
        validar(input.target);
    })
} )

function validar(input){
    const tipoDeInput = input.dataset.tipo;
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = " ";
    } else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostarMensajeDeError(tipoDeInput, input);
    }


}

function mostarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tiposDeErrores.forEach(error =>{
        if(input.validity[error]){
            mensaje=mensajeDeError[tipoDeInput][error];
        }
    })
    return mensaje;
}


const tiposDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
]

const mensajeDeError = {
  nombre: {
    valueMissing: "Este campo no puede estar vacio",
  },
  email: {
    valueMissing: "Este campo no puede estar vacio",
    typeMismatch: "El correo no es valido",
  },
  asunto: {
    valueMissing: "Este campo no puede estar vacio",
    patternMismatch: "El asunto debe contener entre 10 a 40 caracteres"
  },
  mensaje: {
    valueMissing: "Este campo no puede estar vacio",
    patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres"
  },
};


