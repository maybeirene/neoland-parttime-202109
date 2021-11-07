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

function split(str, separador) {
  var arrSplit = [];
  var s = 0;
  var word = "";
  
  for (var i = 0; i <= str.length; i++) {
    if (str[i] == undefined && str[i-1] !== separador) {
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


console.log('DEMO split')

var splited = split('hola que tal como estas?', ' ');
console.log(splited) //['hola', 'que', 'tal', 'como', 'estas?']

var splited = split('se.me.rompio.la.barra.espaciadora.', '.');
console.log(splited) //['se', 'me', 'rompio', 'la', 'barra', 'espaciadora']
