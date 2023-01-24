const array = [1,2,2,3,4, [,1,3,4,5, [0,9,8,7,6]]];
console.log(array.flat(3));

// flatmap
const array2 = [1,2,3,4,5,6,7];
console.log(array2.flatMap(v => [v, v * 2]));