//***DATOS***

const datos = [
     ['a', 'ai'],
     ['e', 'enter'],
     ['i', 'imes'],
     ['o', 'ober'],
     ['u', 'ufat'],
]

//***METODOS***

const enc = () => {
     let texto = textoInicial();
     let textoEncriptado = '';
     let coin = false;

     for (let i = 0; i < texto.length; i++) {
          coin = false;
          for (let j = 0; j < datos.length; j++) {
               if(texto[i].includes(datos[j][0])){
                    textoEncriptado += datos[j][1];
                    coin = true;  
                    break; 
               }
          }
          if (!coin) {
               textoEncriptado += texto[i];  
          } 
            
     }
     console.log(textoEncriptado);
     mostrarResultado(texto);
}

//Encriptar el texto solicitado.
const encriptar = () => {

     let textoEncriptado = "";
     let texto = textoInicial();

     if (texto.length) {

          for (let i = 0; i < texto.length; i++) {

               if (texto[i] === "a") {
                    textoEncriptado += "ai";

               } else if (texto[i] === "e") {
                    textoEncriptado += "enter";

               } else if (texto[i] === "i") {
                    textoEncriptado += "imes";

               } else if (texto[i] === "o") {
                    textoEncriptado += "ober";

               } else if (texto[i] === "u") {
                    textoEncriptado += "ufat";

               } else {
                    textoEncriptado += texto[i];
               }

          }//end for

          mostrarResultado(textoEncriptado);

     }//end if
}

//Desencriptar el texto solicitado.
const desencriptar = () => {

     let textoDesencriptado = "";
     let texto = textoInicial();

     if (texto.length) {

          for (let i = 0; i < texto.length; i++) {

               if (texto[i] === "a") {
                    textoDesencriptado += "a";
                    i += 1;

               } else if (texto[i] === "e") {
                    textoDesencriptado += "e";
                    i += 4;

               } else if (texto[i] === "i") {
                    textoDesencriptado += "i";
                    i += 3;

               } else if (texto[i] === "o") {
                    textoDesencriptado += "o";
                    i += 3;

               } else if (texto[i] === "u") {
                    textoDesencriptado += "u";
                    i += 3;

               } else {
                    textoDesencriptado += texto[i];
               }

          }//end for

          mostrarResultado(textoDesencriptado);
     }
}

//Obtener el texto inicial para encriptar o desencriptar.
const textoInicial = () => {
     return document.getElementById('textarea-solicitado').value.toLowerCase();
}

//Mostrar el resultado en el area de texto.
const mostrarResultado = (resultado) => {
     let areaTexto = document.getElementById('textarea-resultado');
     areaTexto.innerHTML = resultado;
     ocultarImagen();
}

//Oculta la imagen del inicio del area de resultados.
const ocultarImagen = () => {
     let display = document.getElementById('display1');
     let display2 = document.getElementById('display2');
     display.className = 'ocultar';
     display2.className = 'display2';
}

//Copia el resultado.
const copiarResultado = () => {
     let texto = document.getElementById('textarea-resultado').value;
     navigator.clipboard.writeText(texto);
     Swal.fire({
          text: "¡Listo!, el texto ha sido copiado al portapapeles.",
          icon: "success"
        });
}
