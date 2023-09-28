'use strict'

const form = document.getElementById('formulario');
const enviar = document.getElementById('btnSend')

//Objetos validación
const fromValid ={
    nombres: false,
    apellidos: false,
    mail: false,
    celphone: false
}
// Envío formulario
enviar.addEventListener("click",function(e) {
    e.preventDefault(); // No envía formulario = No refresaca página
    if(validFormValues(fromValid)===-1){
        alert("Enviando Formulario");
    }else{
        alert("Campos Inválidos");
    }
});
const validFormValues = (objeto)=>{
    const valores = Object.values(objeto);
    let response = valores.findIndex(e =>e === false);
    return response;

}
//validación a través del cambio de los elementos del formulario
form.addEventListener("change", (e)=>{
    const inputId =e.target.id;
    const myValue = e.target.value;
    const myClass = e.target.classList;

    //Agrega estilos validos e invalidos
    const validClass =()=>{
        myClass.add("is-valid");
        myClass.remove("is-invalid");
    };
    const invalidClass=()=>{
        myClass.remove("is-valid");
        myClass.add("is-invalid")
    }
    switch (inputId) {
        case "names":
            const nombresRx = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
            fromValid.nombres = myValue.match(nombresRx) ? true : false;
            fromValid.nombres ? validClass() : invalidClass();
           break;
        case "lastNames":
            const apellidosRx = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
            fromValid.apellidos = myValue.match(apellidosRx) ? true : false;
            fromValid.apellidos ? validClass() : invalidClass();
            break;
        case "mail": 
            const mailRx = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
            fromValid.mail = myValue.match(mailRx) ? true : false;
            fromValid.mail ? validClass() : invalidClass();
            break;
            case "celphone":
            const numRx = /^(10|[1-9]\d{2,})$/g;
            fromValid.celphone = myValue.match(numRx) ? true : false;
            fromValid.celphone ? validClass() : invalidClass();
            break;    
        default:
            break;
    }
});