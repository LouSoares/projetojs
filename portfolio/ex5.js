function metros2() {
    var com = parseFloat(document.getElementById('comprimento').value);
    var lar = parseFloat(document.getElementById('largura').value);

    var metro2 = (lar * com);
    document.getElementById('res').innerHTML = (metro2 * 36);
}