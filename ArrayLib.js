/*
 * File: ArrayLib.js
 * -----------------
 * This library contains a few useful functions for working with arrays.
 */

/*
 * Creates an array of n elements, each of which is initialized to value.
 */

function createArray(n, value) {
   let array = [ ];
   for (let i = 0; i < n; i++) {
      array.push(value);
   }
   return array;
}

/*
 * Lists the elements of the array, one per line, on the console.
 */

function listArray(array) {
   for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
   }
}

/*
 * Splits a text string into an array of lines.
 */

function splitLines(text) {
   let lines = text.split("\n");
   if (lines.length > 0 && lines[lines.length - 1] === "") {
      lines.pop();
   }
   return lines;
}

/*
 * Returns a comparison function that returns the opposite of the original.
 */

function reverseComparison(cmp) {
   return function(v1, v2) { return cmp(v2, v1); };
}

/*
 * Reads an array of lines from the console until the user enters a
 * blank line, printing the prompt string before each line.  Once the
 * input is complete, JavaScript invokes the callback function with
 * the filled-in array.
 */

function readLineArray(prompt, fn) {
   function processLine(line) {
      if (line === "") {
         fn(array);
      } else {
         array.push(line);
         console.requestInput(prompt, processLine);
      }
   }
   let array = [ ];
   console.requestInput(prompt, processLine);
}

/*
 * Reads an array of integers from the console until the user enters a blank
 * line, printing the prompt string before each line.  Once the input is
 * complete, JavaScript invokes the callback function with the input array.
 * If the user enters a line that cannot be parsed as an integer, the user
 * is given a chance to reenter the line.
 */

function readIntArray(prompt, fn) {
   function processLine(line) {
      if (line === "") {
         fn(array);
      } else {
         let value = Number(line);
         if (isNaN(value) || parseInt(line) !== value) {
            console.log("Please enter an integer.");
         } else {
            array.push(value);
         }
         console.requestInput(prompt, processLine);
      }
   }
   let array = [ ];
   console.requestInput(prompt, processLine);
}

/*
 * Reads an array of numbers from the console until the user enters a blank
 * line, printing the prompt string before each line.  Once the input is
 * complete, JavaScript invokes the callback function with the input array.
 * If the user enters a line that cannot be parsed as a number, the user is
 * given a chance to reenter the line.
 */

function readNumberArray(prompt, fn) {
   function processLine(line) {
      if (line === "") {
         fn(array);
      } else {
         let value = Number(line);
         if (isNaN(value)) {
            console.log("Please enter a number.");
         } else {
            array.push(value);
         }
         console.requestInput(prompt, processLine);
      }
   }
   let array = [ ];
   console.requestInput(prompt, processLine);
}
