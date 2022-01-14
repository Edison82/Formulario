
function Saludar(){
    let saludar = document.getElementById("nombre").value;
    alert("Bienvenido " + saludar);
}

function validarEdad() {
    let edad = document.getElementById("edad").value;

    if (edad >= 18) {
        alert("Puedes ingresar");
    } else if (edad <18) {
        alert("No puedes Ingresar");
    } else if (edad == "") {
        alert("Colocar una edad!");
    }
}

function validarGenero() {
    if (document.getElementById('echk2').checked) {
        alert("Eres de genero Masculino debes de pagar 35.000.");
    }

    if (document.getElementById('echk3').checked) {
       alert("Eres de genero Femenino y debes de pagar 20.000.")
    }
}

function validar() {
   Saludar();
   validarEdad();
   validarGenero();
   }
