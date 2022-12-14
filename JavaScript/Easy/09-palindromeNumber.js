/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // convert to string, reverse and rejoin
  var rev = x.toString().split('').reverse().join('');
  // compare if the result  isPalindrome
  var result = x.toString() === rev;

  if (result) {
    console.log(
      x + ` reads as ` + rev + ` from left to right and from right to left.`
    );
  } else {
    console.log(
      `Reads ` + rev + ` from right to left. Therefore it is not a palindrome.`
    );
  }

  return result;
};

isPalindrome(121);
isPalindrome(110);
isPalindrome(-22);
