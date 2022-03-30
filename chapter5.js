//Chapter 5 Exercises (pg 56):

//Minimum:
const min = (num1, num2) => num1 < num2 ? num1 : num2

//Recursion: 
const isEven = number => {
  //Base cases:
  if (number === 0) {
      return true
  } else if (number === 1 ) {
      return false
  }
  return isEven(number - 2)
}
//https://www.freecodecamp.org/news/understanding-recursion-in-javascript/

//Answer:
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  //Does calling isEven here with a negative argument reverse a negative number into a positive?
  else return isEven(n - 2);
}

//Bean Counting:
//Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
function countBs(string) {
  let upperCaseBCount = 0;
  for(let char of string) {
    char === 'B' ? upperCaseBCount++ : upperCaseBCount
  }
  return upperCaseBCount
}
//Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
function countChar(string, letter) {
  let letterCount = 0;
  for(let char of string) {
	char === letter ? letterCount++ : letterCount
  }
  return letterCount
}
function countBs(string) {
  return countChar(string, 'B')
}

