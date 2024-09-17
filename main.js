let cantidad = document.getElementById("cantidad");
const cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
let password = "";
let contrasenia = document.getElementById("contrasena");
let msg = document.getElementById('mensaje');

function genera() {
  let flagMayuscula = false;
  let flagMinuscula = false;
  let flagNumero = false;
  let flagEspecial = false;

  if (cantidad.value < 8) {
    alert("Debe ingresar un número igual o mayor de 8");
    limpia();
  } else {
    let element = '';
    for (let i = 0; i < parseInt(cantidad.value); i++) {
      element = cadena[Math.floor(Math.random() * cadena.length)];
      if (element === element.toUpperCase()) {
        flagMayuscula = true;
      }
      if (element === element.toLowerCase()) {
        flagMinuscula = true;
      }
      if (!isNaN(element)) {
        flagNumero = true;
      }
      else{
        flagEspecial = true;
      }
      password += element;
    }
    contrasenia.value = password;
    password = '';
    if (flagMayuscula && flagMinuscula && flagNumero && flagEspecial) {
      console.log("Contraseña fuerte");
      msg.hidden = false;
      msg.textContent = "Contraseña fuerte";
    }
    else{
      msg.hidden = false;
      msg.textContent = "Contraseña débil";
    }
  }
}

function limpia() {
  cantidad.value = "";
  contrasenia.value = "";
  document.getElementById('cantidad').focus();
  msg.textContent = "";
}
