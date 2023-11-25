// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

function isDigit(s) {
  s = s.trim()
  let valueParse = parseFloat(s)
    
  console.log(valueParse) 
  console.log(typeof valueParse)
    
   if(Number.isNaN(valueParse)){
      return false
   }
    else {
      return valueParse == s
    }
  }
