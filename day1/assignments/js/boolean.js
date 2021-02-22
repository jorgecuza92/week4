// friends = ['john', 'jorge', 'ivonne', 'jonathan', 'dobby', 'dobby']

// function inArray(name) {
//   friends = ['john', 'jorge', 'ivonne', 'jonathan', 'dobby', 'dobby']
//   for(let index = 0; index <= 4; index++) {
//     // console.log(index)
//     if(friends.includes(name, 0)) {
//       return true
//     } else {
//       return false
//     }
//   }
// }
// console.log(inArray('blob'))


function inArray(item) {
  array = ['your mom', 'your dad', 'your grandma']
  for(let index = 0; index <= array.length; index++) {
    if(array.includes(item, 0)) {
      return console.log(item + ' is in the array')
    }
      return false;
  }
}

console.log(inArray('your dad'))