// Introduction to Loop - Breaks & Continues in JS:

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
  ];
  const types = [];
  

  // This approach is super redundant and violates DRY, and it's not dynamic:
  // console.log(jonas[0])
  // console.log(jonas[1])
  // ...
  // console.log(jonas[4])
  // jonas[5] does NOT exist
  
// Looping structure in JS: for (initialization; stop condition ; increment) { what you want to do }

  for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);
  
    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
  }
  
  // console.log(types);
  
  // Initialize new arrays:
  const years = [1991, 2007, 1969, 2020];
  const ages = [];
  
  for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
  }
  console.log(ages);
  
  // continue and break
  // Continue = same as skip in Python
  console.log('--- ONLY STRINGS ---')
  for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
  
    console.log(jonas[i], typeof jonas[i]);
  }
  

  // Break - stop the entire for-loop completely
  console.log('--- BREAK WITH NUMBER ---')
  for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
  
    console.log(jonas[i], typeof jonas[i]);
  }
  