let textArea = "";
let textEncriptado = "";
let textDesencriptado = "";
let textoCopiado = "";

// Encriptar
function encriptar() {
  limpiar()  ;
  textArea = document.getElementById("caja-de-texto").value;
  // Minusculas
  textArea = textArea.toLowerCase();
  console.log(textArea);
  // Recorremos el texto
  for (let i = 0; i < textArea.length; i++) {
    if (textArea[i] == "e"){
      textEncriptado += "enter"; 
    } 
    else if (textArea[i] == "i"){
      textEncriptado += "imes";
    }
    else if (textArea[i] == "a"){
      textEncriptado += "ai";
    }
    else if (textArea[i] == "o"){
      textEncriptado += "ober";
    }
    else if (textArea[i] == "u"){
      textEncriptado += "ufat";
    }
    else{
      textEncriptado += textArea[i];
    }
  }

  mostrarTexto(textEncriptado);
}

// Desencriptar
function desencriptar(){
  limpiar();
  textArea = document.getElementById("caja-de-texto").value;
  textArea = textArea.toLowerCase();
  console.log(textArea);

  // Recorremos el texto
  for (let i = 0; i < textArea.length; i++) {
    if (textArea.slice(i, i + 5) == "enter") {
      textDesencriptado += "e";
      i += 4;
    }
    else if (textArea.slice(i, i + 4) == "imes") {
      textDesencriptado += "i";
      i += 3;
    }
    else if (textArea.slice(i, i +2) == "ai") {
      textDesencriptado += "a";
      i += 1;
    }
    else if (textArea.slice(i, i + 4) == "ober") {
      textDesencriptado += "o";
      i += 3;
    }
    else if (textArea.slice(i, i + 4) == "ufat") {
      textDesencriptado += "u";
      i += 3;
    }
    else {
      textDesencriptado += textArea[i];
    }
  }

  mostrarTexto(textDesencriptado)
}


// Funcion para mostrar texto en el elemento p
function mostrarTexto(texto){
  document.getElementById("encri-desencrip").innerHTML = texto;
}

// Funcio para copiar
function copiar() {
  // Obtenemos el texto del elemento p
  textoCopiado = document.getElementById("encri-desencrip").innerText;

  // Copiamos el texto en el porta papeles
  navigator.clipboard.writeText(textoCopiado);
  alert("Texto copiado");
}


// Funcion para limpiar el espacio
function limpiar() {
  document.querySelector(".caja-en").style.display = "none";
  document.querySelector(".boton-copiar").style.display = "block";
  document.getElementById("encri-desencrip").style.display = "block";
}




