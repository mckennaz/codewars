// Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.

function reverseMiddle(array) {
  let result = []
	if(array.length % 2 == 0){
    const index = array.length / 2;
    result.push(array[index], array[index-1])
  }else{
    const index = Math.ceil(array.length / 2);
    result.push(array[index], array[index-1], array[index-2])
    
  }
  return result
}
