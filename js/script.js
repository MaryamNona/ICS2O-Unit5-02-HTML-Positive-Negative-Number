// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Maryam Nona
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function addAgeClicked () {
  // this function shows a random number 

  // input
  const user_guess = parseInt(document.getElementById("random-guess").value)

  // proces
  if (user_guess < 0) { 
    document.getElementById('number').innerHTML = 'Negative number'
  } else {
    document.getElementById('number').innerHTML = 'A positive number'
  }
}
