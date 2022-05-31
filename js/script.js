// Created by: Anita Kay
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

function calculateFac() {
  //initializing the variables
  let counter = 1;
  let facAnswer = 1;
  
  //get the user input from the text fields
  let userNum = parseInt(document.getElementById("number").value);

  //using a do... while loop to calculate the factorial
  do {
    facAnswer = facAnswer * counter;
    counter = counter + 1;
  } while (counter <= userNum);

  //display the answer back to the user
  document.getElementById("display-results").innerHTML = "The factorial of " + userNum + " is " + facAnswer + "."
}
