// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

function capitalize(s) {
    let a = ''
    let b = ''

    let isUpper = true

    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        if (isUpper) {
            a += char.toUpperCase()
            b += char.toLowerCase()
        } else {
            a += char.toLowerCase()
            b += char.toUpperCase()
        }

        isUpper = !isUpper
    }

    return [a, b]
}
