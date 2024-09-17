let cantidad = document.getElementById("cantidad");
const cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let password = "";
let contrasenia = document.getElementById("contrasena");

function genera() {
  if (cantidad.value < 8) {
    alert("Debe ingresar un número igual o mayor de 8");
    limpia();
  } else {
    for (let i = 0; i < parseInt(cantidad.value); i++) {
      let element = cadena[Math.floor(Math.random() * cadena.length)];
      password += element;
    }
    contrasenia.value = password;
  }
}

function limpia() {
  cantidad.value = "";
  contrasenia.value = "";
  document.getElementById('cantidad').focus();
}
