const checkForSpam = function (str) {
  'use strict';
  // return str.includes('spam' || 'sale' || 'spam'.toUpperCase() || 'sale'.toUpperCase()));
  // return str.includes(('spam' || 'spam'.toUpperCase()) || str.includes('sale' || 'sale'.toUpperCase()));
  
  // return str.includes(('spam'.toUpperCase()) || str.includes('sale'.toUpperCase()));

  return str.toUppercase(str.includes('sale' || 'SPAM'));

}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true