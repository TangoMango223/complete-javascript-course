// Functions calling other functions

// Example:
function cutFruitPieces(fruit){
    return fruit * 4;
}


// // Initial function, which will only give you the whole fruit:
// function fruitProcessor(apples, oranges){
//  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//  const applePieces = cutFruitPieces(apples);
//  const orangePieces = cutFruitPieces(oranges);
//  return juice;   
// }

// console.log(fruitProcessor(2,3));

// Modify to call the cut pieces
function fruitProcessor(apples, oranges){

    // Pieces:
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    // Juice composition
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;

    return juice;   
   }
   
   console.log(fruitProcessor(2,3)); // 8 pieces of APPL, and 12 pieces of ORNG

   // You must consider - why not just multiply it by 4 and call it a day?
   // Why are we calling another function?
   // Would avoid repeating writing the same code multiple times.