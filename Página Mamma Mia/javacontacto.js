// Función básica utilizando sólo funciones, variables, if/else y getElementById vistos en clase
function validarFormulario() {
    
    // Capturamos los valores de los inputs usando getElementById
    var edad = document.getElementById("edad").value;
    var dias = document.getElementById("dias").value;
    var pasajeros = document.getElementById("pasajeros").value;
    var telefono = document.getElementById("telefono").value;
    
    // Capturamos el contenedor del mensaje para mostrar el texto en pantalla
    var mensaje = document.getElementById("mensaje-formulario");

    // Condicionales simples (if / else) para validar campos vacíos
    if (edad === "" || dias === "" || pasajeros === "" || telefono === "") {
        mensaje.innerHTML = "Por favor, completa todos los campos.";
    } 
    // Condicionales con operadores numéricos (vistos en clase)
    else if (edad < 1 || edad > 100) {
        mensaje.innerHTML = "La edad debe ser un número entre 1 y 100.";
    } 
    else if (dias < 1 || dias > 365) {
        mensaje.innerHTML = "La cantidad de días debe ser entre 1 y 365.";
    } 
    else if (pasajeros < 1 || pasajeros > 100) {
        mensaje.innerHTML = "La cantidad de pasajeros debe ser entre 1 y 100.";
    } 
    else {
        // Si todo está bien, mostramos un mensaje de éxito usando innerHTML (como en la Clase 9)
        mensaje.innerHTML = "¡Datos correctos! Enviando formulario...";
    }
}