function somar() {
    var num1 = parseFloat(document.getElementById("quantidade").value);
    var num2 = parseFloat(document.getElementById("vuni").value);
    var resultado = num1 * num2;
   resultado = resultado.toFixed(2);
    document.getElementById("vtotal").innerHTML = resultado;
  }