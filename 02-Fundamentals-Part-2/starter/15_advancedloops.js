// Advanced Looping - Backward and Forward:

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true,
  ];


// Backwards Looping - pretty easy, just decrement carefully:
  for (let i = jonas.length - 1; i >= 0; i--){
    console.log(i, jonas[i]);
  }

// Review - BREAK:
for (let i = 0; i <= jonas.length; i ++){
    if (typeof jonas[i] !== 'string') break;
    console.log(i, jonas[i])
}

// Review - Continue - will print Jonas, Schmedtmann, teacher
for (let i = 0; i <= jonas.length; i ++){
    if (typeof jonas[i] !== 'string') continue;
    console.log(i, jonas[i])
}


// Exercise - different exercise repetition.
// Loop inside a loop:
// Total of 3 sets, and each set has 5 repetitions of lifting weights
// Total = 15 repetitions in total, broken down by 3 groups.

for (let exercise = 1; exercise < 4; exercise = exercise + 1){
    // Starting:
    console.log(`------- Starting exercise ${exercise} -------`);

    // Lifting
    for(let rep = 1; rep < 6; rep++){
        console.log(`Lifting weights repetition ${rep}🏋️‍♀️`);
    }

    // Jogging
    for(let rep = 1; rep < 4; rep++){
        console.log(`Short jogging  repetition ${rep}🏃‍♀️`);
    }

}
