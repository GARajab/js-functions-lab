const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x
  } else {
    return y
  }
}

console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 2))

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (enteredAge) => {
  if (enteredAge >= 18) {
    return "Adult"
  } else {
    return "Minor"
  }
}

console.log("Exercise 2 Result:", isAdult(21))
