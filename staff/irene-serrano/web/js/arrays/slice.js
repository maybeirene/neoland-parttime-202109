function slice(arr, start, end){
    var result = [];
   // debugger

/*     end =
    end === undefined
      ? arr.length
      : end > arr.length
      ? arr.length
      : end < 0
      ? arr.length + end
      : end;
      */

    end =
        !end ? arr.length : (
            end > arr.length ? arr.length : (
                end < 0 ? end + arr.length : end
            )

        )
 


    /*     if(end){
            if(end > arr.length){
                end = arr.length
            } else {
                if(end < 0){
                    if(end + arr.length < 0){ERRROR}
                }
            }
        } */
    for(var i = start; i < end; i++){
        var element = arr[i];
        result[result.length] = element;
    }
    
    return result
}