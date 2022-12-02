function fem() {
    var alt = parseFloat(document.getElementById('altura').value);
    document.getElementById('res').innerHTML = (61.1 * alt - 41.7);

}

function mas() {
    var alt = parseFloat(document.getElementById('altura').value);
    document.getElementById('res').innerHTML = (72.7 * alt - 58);
}