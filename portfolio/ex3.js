function somar() {
    var v1 = parseFloat(document.getElementById('valor1').value);
    var v2 = parseFloat(document.getElementById('valor2').value);
    var v3 = parseFloat(document.getElementById('valor3').value);

    var q1 = parseFloat(document.getElementById('quant1').value);
    var q2 = parseFloat(document.getElementById('quant2').value);
    var q3 = parseFloat(document.getElementById('quant3').value);

    document.getElementById('res').innerHTML = (v1 * q1 + v2 * q2 + v3 * q3);
}