function sliceStr (str, init, end){
    var newStr = '';
    
    if( init < 0 && end == undefined){
        var realIndex = (str.length + init);
        for(let i = realIndex; i< str.length; i++){
            newStr = newStr + str[i];
        }
    } else if ( isNaN(init) || isNaN(end)){
        console.log('Introduce un índice válido')
    } else if ( end >= str.length || end < 0) {
        console.log('Indique un indice entre 0 y '+ (str.length-1))
    } else if (init > 0 && end > init){
        for(let i = init; i<= end; i++){
            newStr = newStr + str[i];
        }
    }

    return newStr
}
