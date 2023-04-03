// Selectores
const textarea = document.querySelector(".entry__textarea");
const entry = document.querySelector("#entry");

const outputContain = document.querySelector(".output");

// lorem ipsum
const outputText = document.querySelector("#output");


const message = document.querySelector('#message')
// Buttons
const encriptar = document.querySelector("#encriptar");
const desencriptar = document.querySelector("#desencriptar");
const copiar = document.querySelector('#copy')

// Event Listeners
encriptar.addEventListener("click", encriptarTexto);
desencriptar.addEventListener("click", desencriptarTexto);
copiar.addEventListener("click", copiarTexto);



function validateEntry() {
  // Expresiones regulares
  const mayusculas = /[A-Z]/g;
  const caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
  if(entry.value.match(caracteres)) {
      appVacia();
      mostrarAlerta('No se permiten caracteres especiales ni acentos')
      return false;
    }
  if (entry.value === "") {
      appVacia();
      mostrarAlerta("Debes ingresar algo");
      return false;
    }
  if (entry.value.match(mayusculas)) {
      appVacia()
      mostrarAlerta('Solo debes incluir minusculas')
      return false
    }
  return true
}

function encriptarTexto() {
  if( validateEntry()) {
    const encriptarTexto = entry.value
    const textoEncriptado = encriptarTexto
    .replace(/e/igm, "enter")
    .replace(/i/igm, "imes")
    .replace(/a/igm, "ai")
    .replace(/o/igm, "ober")
    .replace(/u/igm, "ufat")
    mostrarTexto(textoEncriptado)
  }
}

function desencriptarTexto() {
  if( validateEntry()) {
    const desencriptarTexto = entry.value
    const textoDesencriptado = desencriptarTexto
      .replace(/enter/igm, "e")
      .replace(/imes/igm, "i")
      .replace(/ai/igm, "a")
      .replace(/ober/igm, "o")
      .replace(/ufat/igm, "u")
    mostrarTexto(textoDesencriptado)
  }
}

function appVacia(){
  outputContain.classList.remove('active')
  message.classList.add('active')
}

function mostrarTexto(texto) {
  output.textContent = ''
  outputContain.classList.add('active')
  message.classList.remove('active')

  const p = document.createElement('p')
  p.classList.add('textoParaCopiar')
  p.textContent = texto
  output.appendChild(p)
}



function mostrarAlerta(mensaje) {
  const divMensaje = document.querySelector(".error");
  if (!divMensaje) {
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("error", "alert");
    divMensaje.textContent = mensaje;
    textarea.appendChild(divMensaje);

    setTimeout(() => {
      divMensaje.remove();
    }, 1500);
  }
}


function copiarTexto() {

  console.log(document.querySelector(".textoParaCopiar").select);
  navigator.clipboard.writeText(document.querySelector(".textoParaCopiar").value)


//   <textarea id='txSalida' cols='20' rows='1' type='text' placeholder='Tu mensaje AQUÍ' class='texto-codificado'>cadena de texto</textarea>
// <button onclick="copiar()">Copiar</button>  
// <script>
// function copiar() {
//     document.getElementById("txSalida").select;
//     navigator.clipboard.writeText(document.getElementById("txSalida").value); 
}


