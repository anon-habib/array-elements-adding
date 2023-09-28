const arr = [45, 65, 132, 16, 5, 41, 0, 41, 65, 445, 32, 13, 450, 1, 32, 13, 245]
// const arr = [1, 2, 3, 4]

// adding the even numbers of an array
function evenAdding (array) {
    let sum = 0;
    for(let i = 0; i <= array.length; i++){
        if (array[i] % 2 === 0){
            sum = sum + array[i];
        }
    } return sum;
}
console.log(evenAdding(arr));


// adding the odd numbers of an array
function oddAdding (array){
    let sum = 0;
    for (let i = 0; i <= array.length; i++){
        if (array[i] % 2 === 1){
            sum = sum + array[i];
        }
    } return sum;
}
console.log(oddAdding(arr));