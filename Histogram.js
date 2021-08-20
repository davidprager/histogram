/*
 * File: Histogram.js
 * ------------------
 * This program reads a list of scores, with one score per line.
 * It then displays a histogram of those scores, divided into ranges
 * containing scores in the 00s, 10s, 20s, and so on, up to the range
 * containing only the value 100.
 */

"use strict";

/* Main program */

function Histogram() {
   //todo : Select a file and read it in

   /* This is the main function of the program that processes a scores file*/
   function processFile(text) {
      // todo : Create an array of values from the text file
      // todo : Create an array of numbers by converting the elements of the values array
      // todo : Create a histogram array
      // todo : Display the histogram array
   }

/* Helper function to create the histogram array */

   function createHistogram(data) {
      // todo : Create a histogram array with 11 elements representing each range of possible values
      // todo : Traverse the numbers array, incrementing the correct element of the histogram as you go along
      // todo : Return the completed histogram array
   }

/* Helper function to display the histogram */

   function displayHistogram(histogram) {
      // todo : Traverse the provided histogram array
      // todo : Create labels for each row
      // todo : Display the labels and asterisks representing the number of values in each range
   }

/* Creates a string consisting of n copies of str */

   function concatNCopies(n, str) {
      // todo : loop n times, adding str to a string on each iteration
      // todo : return the resultant string
   }

}
