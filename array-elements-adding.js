// adding the even numbers of an array

function evenAdding (array) {
    let sum = 0;
    for(let i = 0; i <= array.length; i++){
        if (array[i] % 2 === 0){
            sum = sum + array[i];
        }
    } return sum;
}

const arr = [45, 65,132, 16, 5, 41, 0, 41, 65, 445]
console.log(evenAdding(arr));