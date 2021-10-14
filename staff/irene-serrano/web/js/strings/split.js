/*
function strSplit(str, separador) {
  var arrSplit = [];
  var s = 0;
  var word = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== separador) {
      word = word + str[i];
    } else {
      arrSplit[s] = word;
      word = "";
      s++;
    }
  }

  return arrSplit;
}
*/

function strSplit(str, separador) {
  var arrSplit = [];
  var s = 0;
  var word = "";
  debugger
  for (var i = 0; i <= str.length; i++) {
    if (str[i] == undefined) {
      arrSplit[s] = word;
    } else if (str[i] !== separador) {
      word = word + str[i];
    } else {
      arrSplit[s] = word;
      word = "";
      s++;
    }
  }

  return arrSplit;
}
console.log(strSplit('hola que tal como estas', ' '))