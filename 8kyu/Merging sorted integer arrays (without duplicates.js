// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

const mergeArrays = (a, b) => {
  const arr = a.concat(b).sort((num1,num2) => num1 - num2)
  
  let result = []
  
  for(let i =0; i < arr.length; i++){
    if(arr[i] !== arr[i + 1]){
      result.push(arr[i])
    }
  }
  return result
}
