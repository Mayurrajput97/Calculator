function temp() {
  var temptype = document.getElementById("temptype");
  var temptype = temptype.options[temptype.selectedIndex].value;

  var inputtemp = document.getElementById("inputtemp").value;

  if (temptype == 1) {
    var fahrenheit = Math.round(inputtemp * (9 / 5) + 32);
    document.getElementById("result").value = fahrenheit;
  } else {
    var celsius = Math.round((inputtemp - 32) * (5 / 9));
    document.getElementById("result").value = celsius;
  }
}
