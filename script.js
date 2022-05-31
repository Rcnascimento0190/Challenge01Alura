const inputTexto = document.querySelector(".inputTexto");
const outputtexto = document.querySelector(".outputtexto");

function btnEncriptar () {
	const textoEncriptado = encriptar(inputTexto.value)
	outputtexto.value = textoEncriptado
}



function encriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
    	if(stringEncriptada.includes(matrizCodigo[i][0])) {
    		stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    	}
    } 

return stringEncriptada
}

function btnDescriptar () {
    const textodescriptado = descriptar(outputtexto.value)
    inputTexto.value = textodescriptado
}

function descriptar(stringdescriptada) {
    let matrizCodigo = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]]
    stringdescriptada = stringdescriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringdescriptada.includes(matrizCodigo[i][0])) {
            stringdescriptada = stringdescriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    } 

return stringdescriptada

}

function btnCopiar () {
    var conteudo = document.querySelector("outputtexto");
    conteudo.selet();
    document.execCommand("copy");
    alert("copiado");
}