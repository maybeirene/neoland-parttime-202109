
console.log('find')
console.log('test 1')

function biggerThan(element, i, arr, num){
    var res;

    if(element > num){
        res = element
        return res
    }


}

var arr = [1, 34, 5, 144, 30, 75, 21]
var result = find(arr, biggerThan(), 20)

if (  typeof res === Number &&
    res === 34 &&
    arr.length === 7 &&
    arr[0] === 1 &&
    arr[1] === 34 &&
    arr[2] === 5 &&
    arr[3] === 144 &&
    arr[4] === 30 &&
    arr[5] === 75 &&
    arr[6] === 21 

) console.log('OK')
else console.error(' Not OK')


//var res = find( arr, biggerThan)


