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

    // Listen for keys pressed - pass "e" as event parameter:
    // e = keyboard event
    document.addEventListener('keydown', function (e){
        // console.log("A key was pressed!");
        // console.log(e); // Check the information associated with e

        // Hide again with the ESC key:
        // We are adding the hidden property again, since we want to hide the modal, once ESC is pressed
        // We are doing the reverse (with !) since we want to hide anything that's visible once the ESC is pressed.
        if (e.key === 'Escape') { 
            if(!modal.classList.contains('hidden')){
                // This function will close again, adding the hidden property again:
                closedModal();
            }
        }

        // If you want refactor and be a better programmer, you can combine the two conditions together :D
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                // This function will close again, adding the hidden property again:
                closedModal();
            }
    });
};


