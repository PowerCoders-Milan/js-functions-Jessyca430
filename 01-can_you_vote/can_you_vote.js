// define a function that will check if I can vote or not
const canIVote = (age) => {
    // define a variable legalAge  
    const legalAge = 18
    // create if else statement that console.log() if you can vote or not
    if (age >= legalAge) {
        console.log('you are vote');
    } else {
        console.log('You are not vote');  
    }
}         

// define a variable for your age
let myAge = 36
// call the function and see if you can vote
canIVote(myAge);
canIVote(15);