// 06: Modal Stuff in Webpage

// Use Strict Mode
'use strict';

// Selecting the modal objects
// Notice in HTML that these items exist but the "hidden" keyword was next to it
// Hidden -> will hide the element.

// Step 1: Create a JS variable for each element in the page
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal'); 
const btnsOpenModal = document.querySelectorAll('.show-modal'); 

// Notice the issue with open-modal - only the first one is selected...
console.log(btnsOpenModal);

// // To fix this, use the querySelectorall method 
// btnOpenModal = document.querySelectorAll('.show-modal'); 

// Check again:
// console.log(btnsOpenModal);
// console.log(btnsOpenModal.length);

// You can use a for-loop to check them all and apply functionality.
for (let i = 0; i < btnsOpenModal.length; i++) {
    // We need to add functionality to all of the for-loops.
    // Be super careful of where you place your code...

    const OpenModal = function () {
        // Open the message:
        modal.classList.remove("hidden");

        // Allows the grey background to show up:
        overlay.classList.remove('hidden'); 
    };

    // Function for closure - function expression
    const closedModal = function (){
        // Open the message:
        modal.classList.add("hidden");

        // Allows the grey background to show up:
        overlay.classList.add('hidden');
    };

    // Open conditions:
    btnsOpenModal[i].addEventListener('click', OpenModal);

    // Closures with clicking X button or the overlay.
    // No need for the brackets, you just need to pass the name of the function
    btnCloseModal.addEventListener("click", closedModal);
    overlay.addEventListener('click', closedModal);

    // Listen for leys pressed:
    document.addEventListener('keydown', function (){
        console.log("A key was pressed!");



    });

};


