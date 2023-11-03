/**
 * Checks if a password is valid. A password is considered valid if it has a length 
 * of 10 or more characters, includes at least one capital letter, and contains 
 * at least one non-alphanumeric character.
 *
 * @param {string} password - The password to be checked.
 * @returns {boolean} - Returns true if the password is valid, otherwise returns false.
 */
function passwordChecker(password) {
  const minLength = 10;
  const capitalLetter = /[A-Z]/;
  const nonAlphanumeric = /[^a-zA-Z0-9]/;

  if (password.length >= minLength &&
      capitalLetter.test(password) &&
      nonAlphanumeric.test(password)) {
    return true;
  } else {
    return false;
  }
}

console.log('Input: password1:', passwordChecker("password1"));    // expected output: false
console.log('Input: Password123:', passwordChecker("Password123"));// expected output: false
console.log('Input: Passw@rd1:', passwordChecker("Passw@rd1"));    // expected output: false
console.log('Input: Password@123:', passwordChecker("Password@123"));// expected output: true
console.log('Input: pass123!:', passwordChecker("pass123!"));      // expected output: false
console.log('Input: Pass123:', passwordChecker("Pass123"));        // expected output: false
console.log('Input: Pass!@#:', passwordChecker("Pass!@#"));        // expected output: false
console.log('Input: PASSWORD@1:', passwordChecker("PASSWORD@1"));  // expected output: true
console.log('Input: Passw0rd@2023:', passwordChecker("Passw0rd@2023"));// expected output: true
console.log('Input: Lowercase@123:', passwordChecker("Lowercase@123"));// expected output: false