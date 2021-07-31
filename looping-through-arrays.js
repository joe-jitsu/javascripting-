const pets = ['cat', 'dog', 'rat']; 

for (let i = 0; i < pets.length; i++) {
pets[i] = pets[i] + 's'; 
 }
console.log(pets); 

// this console.log after the loop printed out the array with s added to it.
// which means it looked like this:
// ['cats', 'dogs', 'rats']
// or we could go:
// pets[i] = pets[i] + 's'; 
// this is the same
// pets[i] += 's'; 