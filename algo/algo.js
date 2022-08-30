
// MERN week1 day2

function bubbleSort(arr){
    for(let i = arr.length-1; i > 0; i--){
        for(let j = 0; j < i;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
            console.log(arr)
        }

    }
    return arr;
    
}

console.log(bubbleSort([5,3,4,2,1]))

// console.log(bubbleSort([100,10,1,-50,-1,20,50,0]))