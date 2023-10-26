// Summary
// In this kata, you have to make a function named uglify_word (uglifyWord in Java and Javascript). It accepts a string parameter.

// What does the uglify_word do?
// It checks the char in the given string from the front with an iteration, in the iteration it does these steps:

// There is a flag and it will be started from 1.
// Check the current char in the iteration index.
// If it is an alphabet character [a-zA-Z] and the flag value is equal to 1, then change this character to upper case.
// If it is an alphabet character [a-zA-Z] and the flag value is equal to 0, then change this character to lower case.
// Otherwise, if it is not an alphabet character, then set the flag value to 1.
// If the current char is an alphabet character, do a boolean not operation to the flag.
// After the iteration has done, return the fixed string that might have been changed in such iteration.


function uglifyWord(s) {
  const onlyLettersRegex = /[a-zA-Z]/
  
  let str = ""
  let memory = 1
  
  for (let index = 0; index < s.length; index++) {
    const letter = s[index]
    if (onlyLettersRegex.test(letter))  {
      str += memory === 1 ? letter.toUpperCase() : letter.toLowerCase()
      memory = memory === 1 ? 0 : 1
    } else {
      memory = 1
      str += s[index]  
    }
  }
  
  return str
}
