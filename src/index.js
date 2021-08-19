
exports.min = function min (array) {
 
    if (!isValid(array)) return 0;

    let minNumber
    for (let i = 0; i < array.length; i++ ) {
      minNumber == undefined ? minNumber = array[0] : {} ;
      Number(minNumber) < Number(array[i]) ? {} : minNumber = array[i] ;
  }
  return minNumber;
}

exports.max = function max (array) {

  if (!isValid(array)) return 0;
  
  let maxNumber
  for (let i = 0; i < array.length; i++ ) {
    maxNumber == undefined ? maxNumber = array[0] : {} ;
    Number(maxNumber) > Number(array[i]) ? {} : maxNumber = array[i] ;
  
  }
return maxNumber;
}

exports.avg = function avg (array) {

  if (!isValid(array)) return 0;

  let sum = 0

  for (let i = 0; i < array.length; i++ ) {
    sum += array[i]
  }

  return sum / (array.length);
}

function isValid(array) {
  return Boolean(!(!Array.isArray(array) || array.length == 0))
}
