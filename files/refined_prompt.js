/**
 * Converts a given string to camelCase format.
 *
 * - Non-alphanumeric characters are replaced with spaces.
 * - The first word is lowercased; subsequent words are capitalized and concatenated.
 * - Empty or non-string input throws a TypeError or returns an empty string.
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * toCamelCase('Hello World'); // 'helloWorld'
 * toCamelCase('user_id'); // 'userId'
 * toCamelCase('SCREEN_NAME'); // 'screenName'
 * toCamelCase('mobile-number'); // 'mobileNumber'
 * toCamelCase('user number 1'); // 'userNumber1'
 */

/**
 * Converts a given string to dot.case format.
 *
 * - Non-alphanumeric characters are replaced with spaces.
 * - All words are lowercased and joined by dots.
 * - Empty or non-string input throws a TypeError or returns an empty string.
 *
 * @param {string} input - The string to convert to dot.case.
 * @returns {string} The dot.case formatted string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * toDotCase('Hello World'); // 'hello.world'
 * toDotCase('user_id'); // 'user.id'
 * toDotCase('SCREEN_NAME'); // 'screen.name'
 * toDotCase('mobile-number'); // 'mobile.number'
 * toDotCase('user number 1'); // 'user.number.1'
 */
function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string.');
    }

    // Replace all non-alphanumeric characters with spaces
    let cleaned = input
        .replace(/[^a-zA-Z0-9]+/g, ' ')
        .trim();

    if (cleaned.length === 0) return '';

    // Split by spaces, filter out empty strings
    const words = cleaned.split(/\s+/);

    // Lowercase the first word, capitalize the rest
    return words
        .map((word, idx) => {
            if (idx === 0) return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase('Hello World')); // helloWorld
// console.log(toCamelCase('user_id')); // userId
// console.log(toCamelCase('SCREEN_NAME')); // screenName
// console.log(toCamelCase('mobile-number')); // mobileNumber
// console.log(toCamelCase('user number 1')); // userNumber1

function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string.');
    }

    // Replace all non-alphanumeric characters with spaces
    let cleaned = input
        .replace(/[^a-zA-Z0-9]+/g, ' ')
        .trim();

    if (cleaned.length === 0) return '';

    // Split by spaces, filter out empty strings
    const words = cleaned.split(/\s+/);

    // Lowercase all words and join with dots
    return words.map(word => word.toLowerCase()).join('.');
}

// Example usage:
// console.log(toDotCase('Hello World')); // hello.world
// console.log(toDotCase('user_id')); // user.id
// console.log(toDotCase('SCREEN_NAME')); // screen.name
// console.log(toDotCase('mobile-number')); // mobile.number
// console.log(toDotCase('user number 1')); // user.number.1

