// excrsice 1 

function Sum(arr){
    return arr.reduce((a, b) => a + b, 0);
}
console.log(Sum([1,2,3,4,5]));
// excrsice 2
function Max(arr){
    return Math.max(...arr);
}

console.log(Max([1,2,3,4,5]));
// excrsice 3
function Reverse(arr){
    return arr.reverse();
}

console.log(Reverse([1,2,3,4,5]));
// excrsice 4

function WithoutSameNumbers(arr){
    return [...new Set(arr)];
}

console.log(WithoutSameNumbers([1,2,3,4,5]));