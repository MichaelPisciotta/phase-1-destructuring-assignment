//1

const farmAnimals = 'cow horse sheep pig chicken';
const farmAnimalsTwo = farmAnimals.split(" "); //["cow", "horse", "sheep", "pig", "chicken"]


const [moo, neigh, baa, oink, cluck] = farmAnimalsTwo;




//2

 const animalNames = farmAnimals.split(" ") //["cow", "horse", "sheep", "pig", "chicken"]

 const animalNamesTwo = animalNames.slice(1,2)

 const [bessie, dolly, babe, little] = animalNamesTwo;



// //3
// const [blackAndWhite, black, pink] = [cow, sheep, pig];



// //4


// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// const [red, orange, yellow, green, blue, indigo, violet] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'] 



// //5

// const [r, o, y, g, b, v] = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'] 


// //6

// const indg = "indigo"



// //7


// const muppet = {
//   muppetName: 'Miss Piggy',
//   color: 'pink',
//   song: 'Never Before, Never Again',
//   job: 'Cast member of The Muppet Show',
//   partner: 'Kermit'
// };

// let [muppetName, color, song, job, partner] = muppet



// //8

// const nestedMuppet = {
//   nestedName: 'Kermit',
//   nestedColor: 'green',
//   album: {
//     theMuppetMovie: {
//       song1: 'Rainbow Connection',
//       song2: 'Moving Right Along',
//       song3: 'Never Before, Never Again',
//       song4: 'I Hope That Something Better Comes Along',
//     },
//   },
//   nestedJob: 'Host of The Muppet Show',
//   nestedPartner: 'Miss Piggy'
// };

// let nestedMuppet2 = [ song2, song4, nestedPartner]
// let nestedMuppet2 = ['Moving Right Along', 'I Hope That Something Better Comes Along']





// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner