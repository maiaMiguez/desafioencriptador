function encriptar() {
    const texto = document.getElementById('input-text').value;
    const textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('output-text').value = textoEncriptado;
}

function desencriptar() {
    const texto = document.getElementById('input-text').value;
    const textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('output-text').value = textoDesencriptado;
}

function copiar() {
    const texto = document.getElementById('output-text');
    texto.select();
    document.execCommand('copy');
}
