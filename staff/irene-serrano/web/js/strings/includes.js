function strSplit(str, separador) {
    var arrSplit = [];
    var s = 0;
    var word = "";
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


function strIncludes (str, value){
   var newArr = strSplit(str, ' ');

   for(var i = 0; i < newArr.length; i++){
       if (newArr[i] === value) return true
       else return false
   }
    
}
