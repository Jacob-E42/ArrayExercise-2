//hasOddNumber
function hasOddNumber(arr) {
    return arr.some(function (num) {
        return num % 2 !== 0
    })
}

//hasAZero
function hasAZero(num) {
    return Array.from(num + '').some(function (digit) {
        return digit === '0';
    })
}

//hasOnlyOddNumbers
function hasOnlyOddNumbers(arr) {
    return arr.every(function (num) {
        return num % 2 !== 0;
    })
}


//hasNoDuplicates
function hasNoDuplicates(arr) {
    return arr.every(function (num) {
        return arr.filter(function(el){return el === num;}).length === 1;
    })
}

//hasCertainKey
function hasCertainKey(arr, key) { 
    return arr.every(function(obj){
        return obj[key];
    })
}

//hasCertainValue
function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(obj){
        return obj[key] === searchValue;
    })
 }
