// console.log("Greetings from main.js")

// review this function below:
// function thisIsTrue(arg1, arg2) {
//   if (arg1.length <3) {
//     console.log(`You are ${arg1}`);
//   } else if (arg2.length > 8) {
//     console.log(`You are ${arg2}`);
//   } else {
//     console.log('You are NOTHING!');
// }
// thisIsTrue('ni', 'mickeymouse');


const canDrive = (age) => {
  if (!(age >= 15)) {
    return true;
  }

  return false;
}

const answer = canDrive(12);
console.log(canDrive(answer));
